import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

function SearchForm({}) {
  return (
    <div className="_wrapper">
      <section className="search">
        <form className="search__form" name="search" action="">
          <input className="search__input" name="search" type="text" placeholder="Фильм" required />
          <span className="search__error"></span>
          <button className="search__button" type="submit"></button>
        </form>
        <FilterCheckbox />
      </section>
    </div>
  )
}

export default SearchForm