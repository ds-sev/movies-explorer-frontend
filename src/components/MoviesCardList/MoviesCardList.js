import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function MoviesCardList({ onLikeClick, isLoading, moviesList }) {

  const location = useLocation()
  const screenWidthMedium = 1024
  const screenWidthSmall = 632
  const [numberOfMovies, setNumberOfMovies] = useState(12)

  useEffect(() => {
    let timer
    const changeTimer = () => {
      timer = setTimeout(changeNumberOfMoviesForRender, 1000)
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
          <div className="movie-card-section__list">
            {
              moviesList.length
                ? moviesList.slice(0, numberOfMovies).map((movie) => (
                  <MoviesCard
                    movie={movie}
                    key={movie.id || movie._id}
                    onLikeClick={onLikeClick}
                  />
                ))
                : <div>
                  <div className="movie-card-section__not-found-movies"></div>
                  <span>Ничего не найдено</span>
                </div>
            }
          </div>
          {location.pathname === '/movies' && moviesList.length >= 3 &&
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