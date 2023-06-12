import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import { useEffect, useState } from 'react'

function MoviesCardList() {

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
          <ul className="movie-card-section__list">
            <li className="movie-card-section__list-item"><MoviesCard /></li>
            <li className="movie-card-section__list-item"><MoviesCard /></li>
            <li className="movie-card-section__list-item"><MoviesCard /></li>
            <li className="movie-card-section__list-item"><MoviesCard /></li>
            <li className="movie-card-section__list-item"><MoviesCard /></li>
            <li className="movie-card-section__list-item"><MoviesCard /></li>
            <li className="movie-card-section__list-item"><MoviesCard /></li>
            <li className="movie-card-section__list-item"><MoviesCard /></li>
            <li className="movie-card-section__list-item"><MoviesCard /></li>
          </ul>
          <button className="movie-card-section__view-more _button">Еще</button>
        </section>
      )}
    </>
  )
}

export default MoviesCardList