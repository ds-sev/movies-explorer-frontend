import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

function SavedMovies({moviesList, onLikeClick}) {
  console.log(moviesList)
  return (
    <>
      <SearchForm />
      <MoviesCardList
         moviesList={moviesList}
         onLikeClick={onLikeClick}
      />
    </>
  )
}

export default SavedMovies