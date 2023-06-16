import './InfoTooltip.css'
import Popup from '../Popup/Popup'

function InfoTooltip({ onClose, state, onConfirmBtnClick }) {

  return (
    <Popup isOpen={state.isOpen} onClose={onClose}>
        <div className="info-tooltip">
          <button
            className="info-tooltip__button-close _button"
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
          />
          <div className="info-tooltip__image" style={{ backgroundImage: `url(${state.image})` }} />
          <span className="info-tooltip__title">{state.text}</span>
          {state.btn &&
            <button className="info-tooltip__button _button" onClick={onConfirmBtnClick}>Да</button>}
        </div>
    </Popup>
  )
}

export default InfoTooltip