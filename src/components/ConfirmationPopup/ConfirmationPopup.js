import PopupWithForm from './PopupWithForm'
import Popup from '../Popup/Popup'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function SignOutConfirmationPopup({ isOpen, onClose, signOut, btnText }) {

  function handleSubmit(evt) {
    evt.preventDefault()
    signOut()
  }

  return (
    <InfoTooltip>
      <div className="confirmation">
        <h1>kmnkmkm</h1>
        <button className="_button">kmkmmkm</button>
      </div>
    </InfoTooltip>
  )
}

export default SignOutConfirmationPopup