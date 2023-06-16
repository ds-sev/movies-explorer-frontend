import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'
import { useEffect, useState } from 'react'
import { getMovies } from '../../utils/MoviesApi'

function MoviesCardList({children}) {

  const [isPreloaderActive, setIsPreloaderActive] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsPreloaderActive(true), 1000)
  }, [])

  // const filteredNames = []
  //
  // function handleGetMovies() {
  //   getMovies()
  //   .then((movies) => {
  //     filteredNames = movies.filter(('а') => {
  //       return filteredNames
  //     }
  //     // data.forEach((item) => {
  //     //   filteredNames = item.map
  //     //   item.map()
  //       // item.nameRU.filter((nameRU => nameRU.includes('а')).map(filteredMovies => {
  //       //   console.log(filteredMovies)
  //
  //
  //
  //
  //
  //   })
  // }

  // handleGetMovies()

  return (
    <>
      {!isPreloaderActive ? (
        <Preloader />
      ) : (
        <section className="movie-card-section _wrapper">
          {/*<ul className="movie-card-section__list">*/}
          {/*  <li className="movie-card-section__list-item"><MoviesCard /></li>*/}
          {/*  <li className="movie-card-section__list-item"><MoviesCard /></li>*/}
          {/*  <li className="movie-card-section__list-item"><MoviesCard /></li>*/}
          {/*  <li className="movie-card-section__list-item"><MoviesCard /></li>*/}
          {/*  <li className="movie-card-section__list-item"><MoviesCard /></li>*/}
          {/*  <li className="movie-card-section__list-item"><MoviesCard /></li>*/}
          {/*  <li className="movie-card-section__list-item"><MoviesCard /></li>*/}
          {/*  <li className="movie-card-section__list-item"><MoviesCard /></li>*/}
          {/*  <li className="movie-card-section__list-item"><MoviesCard /></li>*/}
          {/*</ul>*/}
          {children}
          <button className="movie-card-section__view-more _button">Еще</button>
        </section>
      )}
    </>
  )
}

export default MoviesCardList