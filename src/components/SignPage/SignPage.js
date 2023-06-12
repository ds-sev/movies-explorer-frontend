import './SignPage.css'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'

function SignPage({
                    children,
                    btnText,
                    pageTitle,
                    hintText,
                    hintLinkText,
                    hintLink,
                    onSubmit,
                    isValid,
                    isSignError
                  }) {

  return (
    <section className="sign-page">
      <div className="sign-page__head-container">
        <Logo />
        <h3 className="sign__title">{pageTitle}</h3>
      </div>
      <form className="sign__form" onSubmit={onSubmit}>
        {children}
        {isSignError &&
          <span className="signInputErrorClass">Проверьте правильность ввода логина или пароля</span>}
        <button
          className={`sign__button _button ${!isValid && 'sign__button_disabled'} `}
          type="submit"
        >
          {btnText}
        </button>
        <span className="sign__hint">{hintText}<Link to={hintLink} className="sign__link _link"
        >{hintLinkText}</Link></span>
      </form>
    </section>
  )
}

export default SignPage