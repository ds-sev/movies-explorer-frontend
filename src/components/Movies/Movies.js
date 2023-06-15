import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { useEffect } from 'react'
import mainApi from '../../utils/MainApi'

function Movies() {

  useEffect(() => {
    mainApi.getMyMovies()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }, [])


  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  )
}

export default Movies