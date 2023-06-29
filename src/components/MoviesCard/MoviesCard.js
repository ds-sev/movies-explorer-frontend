import './MoviesCard.css'
import { useLocation } from 'react-router-dom'

function MoviesCard({ movie, onLikeClick, checkIsLikedMovie }) {
  const { isLiked } = movie
  const { pathname } = useLocation()
  const movieLikeButtonClassName = `movie-card__like _button ${isLiked && 'movie-card__like_active'}`
  const hours = Math.floor(movie.duration / 60)
  const minutes = movie.duration % 60

  function handleLikeClick() {
    console.log(isLiked)
    onLikeClick(movie, !isLiked)
  }

  return (
    <div className="movie-card">
      <div className="movie-card__info">
        <div className="movie-card__description">
          <h6 className="movie-card__title">{movie.nameRU}</h6>
          <span className="movie-card__duration">{`${hours}ч ${minutes}м`}</span>
        </div>
        <div className="movie-card__like-container">
          {pathname === '/movies'
            ? (<button className={movieLikeButtonClassName}
                       onClick={handleLikeClick}
                       type="button"
                       aria-label="избранное"></button>)
            : <button className="movie-card__delete _button"
                      onClick={handleLikeClick}
                      type="button"
                      aria-label="избранное"></button>
          }
        </div>
      </div>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <div className="movie-card__image"
             style={{
               backgroundImage: typeof movie.image === 'string'
                 ? `url(${movie.image})`
                 : `url(${`https://api.nomoreparties.co` + movie.image.url})`,
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover'
             }}></div>
      </a>
    </div>
  )
}

export default MoviesCard