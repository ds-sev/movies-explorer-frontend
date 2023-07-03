import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies(props) {
  return (
    <>
      <SearchForm
        shortMoviesSwitch={props.shortMoviesSwitch}
        setShortMoviesSwitch={props.setShortMoviesSwitch}
        onSearch={props.onMoviesSearch}
      />
      <MoviesCardList
        moviesList={props.moviesList}
        onLikeClick={props.onLikeClick}
        isLoading={props.isLoading}
      />
    </>
  )
}

export default Movies