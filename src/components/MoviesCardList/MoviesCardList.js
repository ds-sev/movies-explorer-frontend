import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import { useEffect, useState } from 'react'
import { getMovies } from '../../utils/MoviesApi'

function MoviesCardList({onLikeClick, checkIsLikedMovie, moviesList}) {

  const [isPreloaderActive, setIsPreloaderActive] = useState(false)



  useEffect(() => {
    setTimeout(() => setIsPreloaderActive(true), 1000)
  }, [])

  return (
    <>
      {!isPreloaderActive ? (
        <Preloader />
      ) : (
        <section className="movie-card-section _wrapper">
          <div className="movie-card-section__list">
            {
              // Array.isArray(moviesList)
               moviesList
                ? moviesList.map((movie) => (
                  <MoviesCard
                    movie={movie}
                    key={movie.id || movie._id}
                    // title={movie.nameRU}
                    // duration={movie.duration}
                    // image={`https://api.nomoreparties.co/` + movie.image.url}
                    onLikeClick={onLikeClick}
                    // onLikeRemoveClick={onLikeRemoveClick}
                    // isLiked={movie.isLiked}
                    // checkIsLikedMovie={checkIsLikedMovie}
                  />

                ))
                : <div>
                <div className="movie-card-section__not-found-movies"></div>
                <span>Ничего не найдено</span>
                </div>
            }
          </div>
          <button className="movie-card-section__view-more _button">Еще</button>
        </section>
      )}
    </>
  )
}

export default MoviesCardList