import './MoviesCard.css'

import exampleCardImagePath from '../../images/movie_example/movie_card_pic.jpg'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function MoviesCard({ movie, onLikeClick, onLikeRemoveClick }) {

  const { isLiked } = movie

  const { pathname } = useLocation()

  const movieLikeButtonClassName = `movie-card__like _button ${isLiked && 'movie-card__like_active'}`

  function handleLikeClick() {
    onLikeClick(movie, !isLiked)
  }
  //
  // function handleDeleteCard() {
  //   onLikeClick(movie, !isLiked)
  // }

  return (
    <div className="movie-card">
      <div className="movie-card__info">
        <div className="movie-card__description">
          <h6 className="movie-card__title">{movie.nameRU}</h6>
          <span className="movie-card__duration">{movie.duration}</span>
        </div>
        <div className="movie-card__like-container">
          {pathname === '/movies'
            ? (
              !movie.isLiked ?
                (
                  <button className={movieLikeButtonClassName}
                          onClick={handleLikeClick}
                          type="button"
                          aria-label="избранное"></button>
                ) : (
                  <button className="">Удоли</button>
                )
            )
            : <button className="movie-card__delete _button"
                      onClick={handleLikeClick}
                      type="button"
                      aria-label="избранное"></button>
          }
        </div>
      </div>
      <div className="movie-card__image"
           style={{
             backgroundImage: typeof movie.image === 'string'
               ? `url(${movie.image})`
               : `url(${`https://api.nomoreparties.co` + movie.image.url})`,
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover'
           }}></div>
    </div>
  )
}

export default MoviesCard