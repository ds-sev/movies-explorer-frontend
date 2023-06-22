import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { useEffect, useState } from 'react'
import mainApi from '../../utils/MainApi'
import { getMovies } from '../../utils/MoviesApi'

function Movies(props) {

  // console.log(props.shortMoviesSwitch)

  function clearAllData() {
    localStorage.removeItem('allMovies')
  }



  return (
    <>
      <SearchForm query={props.query || ''}
                  setQuery={props.setQuery}
                  shortMoviesSwitch={props.shortMoviesSwitch}
                  setShortMoviesSwitch={props.setShortMoviesSwitch}
                  onSearch={props.onMoviesSearch}
      />
      <MoviesCardList
        moviesList={props.moviesList}
        onLikeClick={props.onLikeClick}
        // onLikeRemoveClick={props.onLikeRemoveClick}
        // shortMoviesList={props.shortMoviesList}
      />
    </>
  )
}

export default Movies