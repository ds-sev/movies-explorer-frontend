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
      <SearchForm
                  shortMoviesSwitch={props.shortMoviesSwitch}
                  setShortMoviesSwitch={props.setShortMoviesSwitch}
                  onSearch={props.onMoviesSearch}

                  tempQuery={props.setTempQuery}

      />
      <MoviesCardList
        moviesList={props.moviesList}
        onLikeClick={props.onLikeClick}
        // checkIsLikedMovie={props.checkIsLikedMovie}
        // onLikeRemoveClick={props.onLikeRemoveClick}
        // shortMoviesList={props.shortMoviesList}
      />
    </>
  )
}

export default Movies