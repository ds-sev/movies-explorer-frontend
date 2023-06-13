import './MoviesCard.css'

import exampleCardImagePath from '../../images/movie_example/movie_card_pic.jpg'
import { useState } from 'react'

function MoviesCard() {

  const [isLiked, setIsLiked] = useState(false)

  const movieLikeButtonClassName = `movie-card__like _button ${isLiked && 'movie-card__like_active'}`

  function handleLikeClick() {
    isLiked
      ? setIsLiked(false)
      : setIsLiked(true)
  }
  return (
    <div className="movie-card">
      <div className="movie-card__info">
        <div className="movie-card__description">
          <h6 className="movie-card__title">33 слова о дизайне</h6>
          <span className="movie-card__duration">1ч 47м</span>
        </div>
        <div className="movie-card__like-container">
          <button className={movieLikeButtonClassName}
                  onClick={handleLikeClick}
                  aria-label="избранное"></button>
        </div>
      </div>
      <div className="movie-card__image"
           style={{
             backgroundImage: `url(${exampleCardImagePath})`,
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'cover'
           }}></div>
    </div>
  )
}

export default MoviesCard