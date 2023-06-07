import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({}) {
  return (
    <section className="movie-card-section _wrapper">
      <ul className="movie-card-section__list">
        <li className="movie-card-section__list-item"><MoviesCard /></li>
        <li className="movie-card-section__list-item"><MoviesCard /></li>
        <li className="movie-card-section__list-item"><MoviesCard /></li>
        <li className="movie-card-section__list-item"><MoviesCard /></li>
      </ul>
      <button className="movie-card-section__view-more">Еще</button>
    </section>
  )
}

export default MoviesCardList