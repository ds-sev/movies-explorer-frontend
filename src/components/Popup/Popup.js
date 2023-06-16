import './Popup.css'
import { useEffect } from 'react'

function Popup({ isOpen, onClose, children }) {
  function onOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }

  useEffect(() => {
    function handleEscKeyClose(evt) {
      if (evt.code === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKeyClose)
    }
    return () => document.removeEventListener('keydown', handleEscKeyClose)
  })

  return (
    <div className={`popup ${isOpen
      ? 'popup_opened'
      : ''}`}
         onClick={onOverlayClick}>
      <div className="popup__container">
        {children}
      </div>
    </div>
  )
}

export default Popup