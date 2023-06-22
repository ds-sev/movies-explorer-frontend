import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
import { useEffect, useState } from 'react'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { useForm } from '../../hooks/useForm'
import { getMovies } from '../../utils/MoviesApi'
import movies from '../Movies/Movies'

function SearchForm(props) {

  // useEffect(() => {
  //   console.log(props.query)
  // }, [])

  // const [searchText, setSearchText] = useState(searchText)
  // const { values, handleChange } =
  //   useForm()

  // const [query, setQuery] = useState('' || localStorage.getItem('filterQuery'))

  const [allMovies, setAllMovies] = useState([])

  const [isShortMoviesSelect, setIsShortMoviesSelect] = useState(false)

  function handleChange(evt) {
    props.setQuery(evt.target.value)
  }

  function handleSearchBtnClick(evt) {
    evt.preventDefault()
    if (props.query === '') {
      console.log('Нужно ввести ключевое слово')
    } else if (allMovies.length === 0 && localStorage.getItem('allMovies')) {
      // getAllMovies()
      console.log('primary load')
    } else {
      console.log('secondary load')
    }

  }

  // function searchMovies(query) {
  //   localStorage.setItem('filterQuery', query)
  //   // console.log(query)
  //   localStorage.setItem('shortMovies', isShortMoviesSelect)
  // }

  return (
    <div className="_wrapper">
      <section className="search">
        <form className="search__form" name="search">
          <input className="search__input"
                 name="query"
                 value={props.query || ''}
                 onChange={handleChange}
                 type="text"
                 placeholder="Фильм"
          />
          <span className="search__error"></span>
          <button className="search__button _button" onClick={props.onSearch}></button>
        </form>
        <FilterCheckbox
          shortMoviesSwitch={props.shortMoviesSwitch}
          setShortMoviesSwitch={props.setShortMoviesSwitch}
        />
      </section>
    </div>
  )
}

export default SearchForm