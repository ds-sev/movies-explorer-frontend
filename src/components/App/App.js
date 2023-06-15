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


//TODO: errors popups!!!
//TODO: signin не должен открываться если пользователь залогинен
function App() {
  /* STATES */
  //popups states
  //elements states
  //sign states
  const [currentUser, setCurrentUser] = useState({})
  const [likedMovies, setLikedMovies] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()

  useEffect(() => checkAuth(), [])

  // useEffect(() => {
  //   checkAuth()
  //   if (isLoggedIn) {
  //     Promise.all([mainApi.getUserInfo(), mainApi.getMyMovies()])
  //     .then(([userData, likedMovies]) => {
  //       setCurrentUser(userData)
  //       setLikedMovies(likedMovies)
  //     })
  //     .catch((err) => console.log(err))
  //   }
  // }, [isLoggedIn])




  function checkAuth() {
    if (localStorage.getItem('loggedIn')) {
      mainApi.checkToken()
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

  // useEffect(() => {
  //   tokenCheck()
  //   if (loggedIn) {
  //     Promise.all([api.getUserInfo(), api.getInitialCards()])
  //     .then(([userData, cardsData]) => {
  //       setCurrentUser(userData)
  //       setCards(cardsData.reverse())
  //     })
  //     .catch((err) => console.log(err))
  //   }
  // }, [loggedIn])

  function handleLogin(formValues) {
    mainApi.login(formValues)
    .then((res) => {
      console.log(res)
      localStorage.setItem('loggedIn', 'true')
      setIsLoggedIn(true)

      navigate('/movies', { replace: true })
      setTimeout(() => {
        localStorage.removeItem('loggedIn')
      }, 3600000)
    })
    .catch((err) => console.log(err))

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

            <Route path="/profile"
                   element={<Profile />} />

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
                isLoggedIn={isLoggedIn}
              />}
            />


            {/*<Route path="/signin" element={<Login*/}
            {/*  onLogin={handleLogin}*/}
            {/*/>} />*/}
            {/*<Route path="/signup" element={<Register />} />*/}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App

