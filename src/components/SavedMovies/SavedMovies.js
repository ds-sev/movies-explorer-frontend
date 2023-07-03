import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

function SavedMovies(props) {

  return (
    <>
      <SearchForm
        onSearch={props.onMoviesSearch}
        shortMoviesSwitch={props.shortMoviesSwitch}
        setShortMoviesSwitch={props.setShortMoviesSwitch}
      />
      <MoviesCardList
         moviesList={props.moviesList}
         onLikeClick={props.onLikeClick}
      />
    </>
  )
}

export default SavedMovies