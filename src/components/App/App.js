import './App.css'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile'
import { json, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import SavedMovies from '../SavedMovies/SavedMovies'
import Layout from '../Layout/Layout'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { useEffect, useRef, useState } from 'react'
import mainApi from '../../utils/MainApi'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import SuccessIcon from '../../images/icons/ok.svg'
import FailIcon from '../../images/icons/not_ok.svg'
import ConfirmIcon from '../../images/icons/confirm.svg'
import { getMovies } from '../../utils/MoviesApi'
import movies from '../Movies/Movies'

function App() {
  /* STATES */
  // sign
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [infoTooltipState, setInfoTooltipState] = useState({ isOpen: false, text: '', image: '' })

  // movies
  const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('allMovies')) || [])
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filteredMovies')) || [])
  const [filteredShortMovies, setFilteredShortMovies] = useState(JSON.parse(localStorage.getItem('filteredShortMovies')) || [])
  const [isShortMoviesSwitchActive, setIsShortMoviesSwitchActive]
    = useState(localStorage.getItem('shortMoviesSwitch'))

  // saved movies
  const [likedMoviesList, setLikedMoviesList] = useState([])
  const [filteredLikedMovies, setFilteredLikedMovies] = useState([])
  const [likedMoviesToRender, setLikedMoviesToRender] = useState([])
  const [isShortSavedMoviesSwActive, setIsShortSavedMoviesSwActive] = useState(false)

  // other
  const [isLoading, setIsLoading] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

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

  useEffect(() => checkAuth(), [])

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), getMovies()])
      .then(([userData, moviesData]) => {
        setCurrentUser(userData)
        setAllMovies(moviesData)
        localStorage.setItem('allMovies', JSON.stringify(moviesData))
      })
      .catch((err) => console.log(err))
    } else {
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
    localStorage.clear()
    mainApi.signout()
    .then(() => {
      navigate('/', { replace: true })
    })
    .catch(err => console.log(err))
  }

  // localStorage.removeItem('filteredMovies')

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setLikedMoviesToRender(likedMoviesList)
    }
  }, [location])

  useEffect(() => {
    // if (isLoggedIn)
    if (isLoggedIn) {
      getMyMovies()
      isShortMoviesSwitchActive
        ? updateFilteredMoviesList(filteredShortMovies)
        : updateFilteredMoviesList(filteredMovies)
    } else {
      // localStorage.clear()
    }
  }, [location])

  useEffect(() => {
    if (isLoggedIn) {
      isShortMoviesSwitchActive
        ? updateFilteredMoviesList(JSON.parse(localStorage.getItem('filteredShortMovies')))
        : updateFilteredMoviesList(JSON.parse(localStorage.getItem('filteredMovies')))
    }
  }, [likedMoviesList])

  function getMyMovies() {
    mainApi.getMyMovies()
    .then((movies) => {
      updateLikedMoviesList(movies)
    })
    .catch(err => console.log(err))
  }

  function updateLikedMoviesList(movies) {
    const likedMovies = movies.map(movie => ({ ...movie, isLiked: true }))
    setLikedMoviesList(likedMovies)
    setLikedMoviesToRender(likedMovies)
  }

  function onLikeClick(movie, isLiked) {
    isLiked
      ? addLikedMovie(movie)
      : removeLikedMovie(movie)
  }

  function updateFilteredMoviesList(movies) {
    const updatedFilteredMoviesProperties = movies.map(movie => ({
        ...movie,
        _id: (likedMoviesList.find(likedMovie => likedMovie.movieId === movie.id) || {})._id,
        isLiked: checkIsLikedMovie(movie)
      })
    )
    if (isShortMoviesSwitchActive) {
      setFilteredShortMovies(updatedFilteredMoviesProperties)
      localStorage.setItem('filteredShortMovies', JSON.stringify(movies))
    } else {
      setFilteredMovies(updatedFilteredMoviesProperties)
      localStorage.setItem('filteredMovies', JSON.stringify(movies))
    }
  }

  function updateFilteredLikedMoviesList(likedMovies) {
    setFilteredLikedMovies(likedMovies)
  }

  function checkIsLikedMovie(movie) {
    return likedMoviesList.some((i) => i.movieId === movie.id)
  }

  function addLikedMovie(movie) {
    mainApi.addMovie(movie)
    .then((movie) => {
      const newLikedMovies = [movie, ...likedMoviesList]
      updateLikedMoviesList(newLikedMovies)
    })
    .catch((err) => console.log(err))
  }

  function removeLikedMovie(movie) {
    mainApi.removeMovie(movie)
    .then(() => {
      // create new array without requested movie
      const newLikedMoviesList = likedMoviesList.filter(likedMovies =>
        likedMovies._id !== movie._id)
      const newFilteredLikedMoviesList = filteredLikedMovies.filter(likedMovies =>
        likedMovies._id !== movie._id)
      updateLikedMoviesList(newLikedMoviesList)
      updateFilteredLikedMoviesList(newFilteredLikedMoviesList)
    })
    .catch((err) => console.log(err))
  }

  function filterMoviesByQuery(query) {
    if (location.pathname === '/saved-movies') {
      const filteredLikedMovies = likedMoviesList.filter((movie) =>
        movie.nameRU.toLowerCase().indexOf(query) >= 0)
      if (isShortSavedMoviesSwActive) {
        const filteredShortLikedMovies = filteredLikedMovies.filter((movie) =>
          movie.duration < 40)
        setLikedMoviesToRender(filteredShortLikedMovies)
      } else {

        setLikedMoviesToRender(filteredLikedMovies)
      }
    } else {
      const filteredMovies = allMovies.filter((movie) =>
        movie.nameRU.toLowerCase().indexOf(query) >= 0)
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies))
      setFilteredMovies(filteredMovies)
      updateFilteredMoviesList(filteredMovies)
    }
  }

  function filterMoviesByQueryAndDuration(query) {
    const filteredMovies = allMovies.filter((movie) =>
      movie.nameRU.toLowerCase().indexOf(query) >= 0)
    const filteredShortMovies = filteredMovies.filter((movie) => movie.duration < 40)
    localStorage.setItem('filteredShortMovies', JSON.stringify(filteredShortMovies))
    updateFilteredMoviesList(filteredShortMovies)
  }

  function filterMoviesByDurationInResult() {
    const filteredShortMovies = filteredMovies.filter((movie) => movie.duration < 40)
    localStorage.setItem('filteredShortMovies', JSON.stringify(filteredShortMovies))
    setFilteredShortMovies(filteredShortMovies)
  }

  const notInitialRender = useRef(false)

  useEffect(() => {
    if (notInitialRender.current) {
      if (isShortMoviesSwitchActive) {
        filterMoviesByDurationInResult()
        localStorage.setItem('shortMoviesSwitch', true)
      } else {
        updateFilteredMoviesList(filteredMovies)
        localStorage.removeItem('shortMoviesSwitch')
      }
    } else {
      notInitialRender.current = true
    }

  }, [isShortMoviesSwitchActive])

  useEffect(() => {
    if (isShortSavedMoviesSwActive) {
      const shortMovies = likedMoviesToRender.filter((movie) => movie.duration < 40)
      setLikedMoviesToRender(shortMovies)
    } else {
      setLikedMoviesToRender(likedMoviesList)
    }
  }, [isShortSavedMoviesSwActive])

async function handleMoviesSearch(query) {
    try {
      await setIsLoading(true)
      if (query.length) {
        setIsLoading(true)
        if (location.pathname === '/saved-movies') {
          filterMoviesByQuery(query)
        } else {
          localStorage.setItem('allMoviesSearchQuery', query)
          if (isShortMoviesSwitchActive) {
            filterMoviesByQueryAndDuration(query)
          } else {
            filterMoviesByQuery(query)
          }
        }
      } else {
        setInfoTooltipState({ isOpen: true, text: 'Нужно ввести ключевое слово', image: FailIcon })
        setTimeout(() => closePopup(), 2000)
      }
    } finally {
      setIsLoading(false)
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
                  shortMoviesSwitch={isShortMoviesSwitchActive}
                  setShortMoviesSwitch={setIsShortMoviesSwitchActive}
                  onMoviesSearch={handleMoviesSearch}
                  moviesList={isShortMoviesSwitchActive ? filteredShortMovies : filteredMovies}
                  onLikeClick={onLikeClick}
                  isLoading={isLoading}
                />}
              />
              <Route path="saved-movies" element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  moviesList={likedMoviesToRender}
                  setMoviesList={setLikedMoviesList}
                  onLikeClick={onLikeClick}
                  onMoviesSearch={handleMoviesSearch}
                  shortMoviesSwitch={isShortSavedMoviesSwActive}
                  setShortMoviesSwitch={setIsShortSavedMoviesSwActive}
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

