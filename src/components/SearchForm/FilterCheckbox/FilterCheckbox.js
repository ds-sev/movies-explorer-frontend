import './FilterCheckbox.css'

function FilterCheckbox(props) {
  function handleChange() {
    props.setShortMoviesSwitch(!props.shortMoviesSwitch)
  }

  return (
    <div className="checkbox">
      <label className="checkbox__container">
        <input className="checkbox__input"
               type="checkbox"
               id="checkbox"
               defaultChecked={props.shortMoviesSwitch}
               onChange={handleChange} />
        <span className="checkbox__switch">Короткометражки</span>
      </label>
    </div>
  )
}

export default FilterCheckbox