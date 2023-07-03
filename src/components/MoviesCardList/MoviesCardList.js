import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SCREEN_SIZE } from '../../utils/constants'

function MoviesCardList({ onLikeClick, isLoading, moviesList }) {

  const location = useLocation()
  const { desktop, tablet, mobile } = SCREEN_SIZE
  const [numberOfMovies, setNumberOfMovies] = useState(desktop.moviesQuantity.total)

  useEffect(() => {
    const changeTimer = () => {
      setTimeout(changeNumberOfMoviesForRender, 1000)
    }
    window.addEventListener('resize', changeTimer)
  })

  function changeNumberOfMoviesForRender() {
    if (window.innerWidth < tablet.width) {
      return setNumberOfMovies(tablet.moviesQuantity.total)
    }
    if (window.innerWidth < mobile.width) {
      return setNumberOfMovies(mobile.moviesQuantity.total)
    } else {
      setNumberOfMovies(desktop.moviesQuantity.total)
    }
  }

  function handleMoreMoviesView() {
    if (window.innerWidth > tablet.width) {
      return setNumberOfMovies(numberOfMovies + desktop.moviesQuantity.more)
    }
    if (window.innerWidth <= tablet.width) {
      return setNumberOfMovies(numberOfMovies + tablet.moviesQuantity.more)
    }
  }

  return (
    <>
      {isLoading
        ? (<Preloader />)
        : (
          <section className="movie-card-section _wrapper">
            {
              moviesList.length
                ?
                <div className="movie-card-section__list">
                  <>
                    {location.pathname === '/saved-movies'
                      ? (
                        <>
                          {moviesList.map((movie) => (
                            <MoviesCard
                              movie={movie}
                              key={movie.id || movie._id}
                              onLikeClick={onLikeClick}
                            />
                          ))}
                        </>
                      ) : (
                        <>
                          {moviesList.slice(0, numberOfMovies).map((movie) => (
                            <MoviesCard
                              movie={movie}
                              key={movie.id || movie._id}
                              onLikeClick={onLikeClick}
                            />
                          ))}
                        </>
                      )
                    }
                  </>
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