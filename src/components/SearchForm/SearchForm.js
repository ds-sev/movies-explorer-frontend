import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function SearchForm(props) {

  // const [q, setQ] = useState(props.query || '')
  const [query, setQuery] = useState('')


  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('allMoviesSearchQuery')) {
      setQuery(localStorage.getItem('allMoviesSearchQuery'))
    } else if(location.pathname === '/saved-movies') {
      setQuery('')
    }
   }, [location])

  function handleChange(evt) {
    setQuery(evt.target.value)
    // props.tempQuery(evt.target.value)
  }

  function onSubmit(evt) {
    evt.preventDefault()
    props.onSearch(query)
  }

  return (
    <div className="_wrapper">
      <section className="search">
        <form className="search__form" name="search" onSubmit={onSubmit}>
          <input className="search__input"
                 name="query"
                 // value={props.query || ''}
                 value={query || ''}
                 onChange={handleChange}
                 type="text"
                 placeholder="Фильм"
          />
          <span className="search__error"></span>
          <button className="search__button _button"></button>
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