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

//TODO: errors popups!!!
function App() {
  /* STATES */
  //popups states
  //elements states
  //sign states
  const [currentUser, setCurrentUser] = useState({})
  const [likedMovies, setLikedMovies] = useState({})
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
    console.log(infoTooltipState)
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMyMovies()])
      .then(([userData, likedMovies]) => {
        setCurrentUser(userData)
        setLikedMovies(likedMovies)
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
        console.log(err)
        localStorage.removeItem('loggedIn')
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
      console.log(err)
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
      console.log(err)
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
                />}
              />
              <Route path="saved-movies" element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
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

