import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

function MoviesCardList({ onLikeClick, isLoading, moviesList }) {

  const location = useLocation()
  const screenWidthMedium = 1024
  const screenWidthSmall = 632
  const [numberOfMovies, setNumberOfMovies] = useState(12)

useEffect(() => {
  if (moviesList.length === 0 && location.pathname === '/saved-movies') {

  }
})




  useEffect(() => {
    const changeTimer = () => {
      setTimeout(changeNumberOfMoviesForRender, 1000)
    }
    window.addEventListener('resize', changeTimer)
  })

  function changeNumberOfMoviesForRender() {
    if (window.innerWidth < screenWidthMedium) {
      return setNumberOfMovies(8)
    }
    if (window.innerWidth < screenWidthSmall) {
      return setNumberOfMovies(5)
    } else {
      setNumberOfMovies(12)
    }
  }

  function handleMoreMoviesView() {
    if (window.innerWidth > screenWidthMedium) {
      return setNumberOfMovies(numberOfMovies + 3)
    }
    if (window.innerWidth <= screenWidthMedium) {
      return setNumberOfMovies(numberOfMovies + 2)
    }
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className="movie-card-section _wrapper">
          {
            moviesList.length
              ?
              <div className="movie-card-section__list">
                {moviesList.slice(0, numberOfMovies).map((movie) => (
                  <MoviesCard
                    movie={movie}
                    key={movie.id || movie._id}
                    onLikeClick={onLikeClick}
                  />
                ))}
              </div>
              :



              <div className="movie-card-section__not-found-container">
                {/*<div className="movie-card-section__not-found-image"></div>*/}
                <span>{localStorage.getItem('allMoviesSearchQuery') ? 'Ничего не найдено' : 'Введите поисковый запрос.'}</span>
              </div>


          }
          {location.pathname === '/movies' && moviesList.length >= 3 && numberOfMovies < moviesList.length &&
            <button className="movie-card-section__view-more _button"
                    onClick={handleMoreMoviesView}
            >Еще</button>
          }
        </section>
      )}
    </>
  )
}

export default MoviesCardList