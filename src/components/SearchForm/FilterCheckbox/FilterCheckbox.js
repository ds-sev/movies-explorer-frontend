import './FilterCheckbox.css'

function FilterCheckbox({}) {
  return (
    <div className="checkbox">
      <label className="checkbox__container">
        <input className="checkbox__input" type="checkbox" id="checkbox" />
        <span className="checkbox__switch">Короткометражки</span>
      </label>
    </div>
  )
}

export default FilterCheckbox