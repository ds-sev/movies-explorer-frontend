import './App.css'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SavedMovies from '../SavedMovies/SavedMovies'
import Layout from '../Layout/Layout'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { useEffect, useState } from 'react'
import mainApi from '../../utils/MainApi'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import SuccessIcon from '../../images/icons/ok.svg'
import FailIcon from '../../images/icons/not_ok.svg'
import ConfirmIcon from '../../images/icons/confirm.svg'
import { getMovies } from '../../utils/MoviesApi'

//TODO: errors popups!!!
function App() {
  /* STATES */
  //popups states
  //elements states
  //sign states

  const [currentUser, setCurrentUser] = useState({})

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [infoTooltipState, setInfoTooltipState] = useState({ isOpen: false, text: '', image: '' })

  function closePopup() {
    setInfoTooltipState({ isOpen: false, text: '', image: '' })
    scrollController.enableScroll()
  }

  const scrollController = {
    disableScroll() {
      document.body.style.cssText = `overflow: hidden`
    },
    enableScroll() {
      document.body.style.cssText = ''
    }
  }

  const navigate = useNavigate()

  useEffect(() => checkAuth(), [])

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMyMovies()])
      .then(([userData, likedMovies]) => {
        setCurrentUser(userData)
        // setLikedMovies(likedMovies)
      })
      .catch((err) => console.log(err))
    }
  }, [isLoggedIn])

  function checkAuth() {
    if (localStorage.getItem('loggedIn')) {
      mainApi.getUserInfo()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true)
        }
      })
      .catch((err) => {
        localStorage.removeItem('loggedIn')
        console.log(err)
      })
    }
  }

  function handleLogin(formValues, signinMessage) {
    mainApi.login(formValues)
    .then(() => {
      localStorage.setItem('loggedIn', 'true')
      setIsLoggedIn(true)
      navigate('/movies', { replace: true })
      setTimeout(() => {
        localStorage.removeItem('loggedIn')
      }, 3600000)
      setInfoTooltipState({ isOpen: true, text: signinMessage, image: SuccessIcon, btn: false })
      scrollController.disableScroll()
      setTimeout(() => closePopup(), 2000)
    })

    .catch((err) => {
      setInfoTooltipState({ isOpen: true, text: err, image: FailIcon })
      scrollController.disableScroll()
      setTimeout(() => closePopup(), 3000)
      console.log(err)
    })
  }

  function handleRegister(regFormValue, signupMessage) {
    mainApi
    .register(regFormValue)
    .then(() => {
      handleLogin(regFormValue, signupMessage)
    })
    .catch((err) => {
      setInfoTooltipState({ isOpen: true, text: err, image: FailIcon })
      setTimeout(() => closePopup(), 3000)
      console.log(err)
    })
  }

  function handleSignOutConfirmation() {
    setInfoTooltipState({ isOpen: true, text: 'Вы уверены?', image: ConfirmIcon, btn: true })
  }

  function handleSignOut() {
    setIsLoggedIn(false)
    localStorage.removeItem('loggedIn')
    setInfoTooltipState({ isOpen: false, text: '', image: '' })
    mainApi.signout()
    .then(() => {
      navigate('/', { replace: true })
    })
  }

  ///////////////MMMMMMMOOOOOVVVVVVIIIIIEEEESSSSSS

  const [query, setQuery] = useState(localStorage.getItem('globalSearchQuery'))
  const [isShortMoviesSwitchActive, setIsShortMoviesSwitchActive]
    = useState(localStorage.getItem('shortMoviesSwitch'))
  const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('allMovies')))
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filteredMovies')))
  // const [filteredShortMovies, setFilteredShortMovies] = useState(JSON.parse(localStorage.getItem('filteredShortMovies')))


  const [isLikedMovie, setIsLikedMovie] = useState(false)
  const [likedMoviesList, setLikedMoviesList] = useState([])



  useEffect(() => {
    getMyMovies()
    console.log(likedMoviesList)
  }, [])

  function getMyMovies() {
    mainApi.getMyMovies()
    .then((res) => {
      setLikedMoviesList(res)
    })
  }

  function onLikeClick(movie, isLiked) {
    isLiked
      ? addLikedMovie(movie)

      : removeLikedMovie(movie)
    // isLiked ? setLike(movie) : deleteLike(movie)
  }


  function updateLikedMoviesList(movies) {
    const likedMovies = movies.map(movie => ({...movie, isLiked: true}))
    setLikedMoviesList(likedMovies)
    localStorage.setItem('likedMovies', likedMovies)
  }


  // function checkIsLikedMovie(movie) {
  //   return likedMoviesList.some((i) => i.movieId === movie.id)
  // }


  // function updateFilteredMovies(movies) {
  //   const formattedMovies = movies.map(movie =>
  //     ({
  //       ...movie,
  //       _id: (likedMoviesList.find(likedMovie => likedMovie.movieId === movie.id) || {})._id,
  //       isLiked: checkIsLikedMovie(movie)
  //     })
  //   )
  //   setLikedMoviesList(formattedMovies)
  // }
  //
  // useEffect(() => {
  //
  // })



  function addLikedMovie(movie) {
    // console.log(checkIsLikedMovie(movie))

    mainApi.addMovie(movie)
    .then((movie) => {
      // console.log(checkIsLikedMovie(movie))
    })

    .catch((err) => console.log(err))
  }

  function removeLikedMovie(movie) {
    mainApi.removeMovie(movie)
    .then((res) => console.log(res))
  }





//

  function filterMoviesByQuery() {
    const filteredMovies = allMovies.filter((movie) =>
      movie.nameRU.toLowerCase().indexOf(query) >= 0)
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies))
    setFilteredMovies(filteredMovies)
  }

  function filterMoviesByQueryAndDuration() {
    const filteredMovies = allMovies.filter((movie) =>
      movie.nameRU.toLowerCase().indexOf(query) >= 0)
    const filteredShortMovies = filteredMovies.filter((movie) => movie.duration < 60)
    localStorage.setItem('filteredMovies', JSON.stringify(filteredShortMovies))
    setFilteredMovies(filteredShortMovies)
  }

  function filterMoviesByDurationInResult() {
    const filteredShortMovies = filteredMovies.filter((movie) => movie.duration < 60)
    localStorage.setItem('filteredMovies', JSON.stringify(filteredShortMovies))
    setFilteredMovies(filteredShortMovies)
  }

  useEffect(() => {
    handleShortMoviesSearch()
  }, [isShortMoviesSwitchActive])

  function handleShortMoviesSearch() {
    if (isShortMoviesSwitchActive) {
      filterMoviesByDurationInResult()
      localStorage.setItem('shortMoviesSwitch', true)
    } else {
      filterMoviesByQuery()
      localStorage.removeItem('shortMoviesSwitch')
    }
  }

  function handleMoviesSearch(evt) {
    console.log('findButtonClick')
    evt.preventDefault()
    // if search query contains at least 1 symbol:
    if (query.length !== 0) {
      // save this search query
      localStorage.setItem('globalSearchQuery', query)
      // check for movies obj in local state
      if (allMovies.length === 0) {
        // if local state is empty get all movies from Beatfilms base and save it to local storage
        getMovies()
        .then((movies) => {
          localStorage.setItem('allMovies', JSON.stringify(movies))
          setAllMovies(movies)
        })


        .then(

        )

        .then(() => {
          if (isShortMoviesSwitchActive) {
            filterMoviesByQueryAndDuration()
          } else {
            filterMoviesByQuery()
          }
        })
        // in another case perform search in local state
      } else {
        if (isShortMoviesSwitchActive) {
          filterMoviesByQueryAndDuration()
          // filterMoviesByDuration()
        } else {
          filterMoviesByQuery()
        }
      }
      if (filteredMovies.length === 0) {
        console.log('Ничего не найдено')
      }

      // console.log(JSON.parse(localStorage.getItem('filteredMovies')))

    } else {
      setInfoTooltipState({ isOpen: true, text: 'Нужно ввести ключевое слово', image: FailIcon })
      setTimeout(() => closePopup(), 2000)
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="movies" element={
                <ProtectedRouteElement
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  query={query}
                  setQuery={setQuery}
                  shortMoviesSwitch={isShortMoviesSwitchActive}
                  setShortMoviesSwitch={setIsShortMoviesSwitchActive}
                  onMoviesSearch={handleMoviesSearch}
                  moviesList={filteredMovies}
                  onLikeClick={onLikeClick}
                />}
              />
              <Route path="saved-movies" element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  moviesList={likedMoviesList}
                  onLikeClick={onLikeClick}
                />}
              />
            </Route>
            <Route path="/profile" element={
              <ProtectedRouteElement
                element={Profile}
                isLoggedIn={isLoggedIn}
                onSignOut={handleSignOutConfirmation}
              />}
            />
            <Route path="/signin" element={
              <ProtectedRouteElement
                element={Login}
                isLoggedIn={!isLoggedIn}
                onLogin={handleLogin}
              />}
            />
            <Route path="/signup" element={
              <ProtectedRouteElement
                element={Register}
                isLoggedIn={!isLoggedIn}
                onRegister={handleRegister}
              />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <InfoTooltip
            state={infoTooltipState}
            onClose={closePopup}
            onConfirmBtnClick={handleSignOut}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App

