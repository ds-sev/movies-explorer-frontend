// import '../../index.css'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import SavedMovies from '../SavedMovies/SavedMovies'
import Layout from '../Layout/Layout'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Login from '../Login/Login'
import Register from '../Register/Register'

function App() {

  const footerEndpoints = ['/movies', '/saved-movies', '/'];

  return (
    <>

      <div className="body">
        <div className="page">
          {/*<Header />*/}
          {/*<Routes>*/}
          {/*  /!*<Route path="/"*!/*/}
          {/*  /!*       element={<Main />}*!/*/}
          {/*  /!*//*/}
          {/*  <Route path="/movies"*/}
          {/*         element={<Movies />}*/}
          {/*  />*/}
          {/*  <Route path="/saved-movies"*/}
          {/*         element={<SavedMovies />}*/}
          {/*  />*/}
          {/*  <Route path="/profile"*/}
          {/*         element={<Profile />}*/}
          {/*         />*/}
          {/*  <Route path="/signin"*/}
          {/*         element={<Profile />}*/}
          {/*  />*/}
          {/*  <Route path="/signup"*/}
          {/*         element={<Profile />}*/}
          {/*  />*/}

          {/*  <Route exact path="/" component={<Main />} />*/}

          {/*  </Routes>*/}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="movies" element={<Movies />}/>
              <Route path="saved-movies"
                       element={<SavedMovies />} />


            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
          <div className="push">
          </div>





          {/*<Footer />*/}

          {/*<Routes>*/}
          {/*  <Route exact path="/" component=""/>*/}
          {/*  <Route exact path='/signin' component="" />*/}
          {/*  <Route exact path='/signup' component="" />*/}
          {/*</Routes>*/}
          {/*<Footer/>*/}
        </div>
      </div>
    </>
  )
}

export default App

