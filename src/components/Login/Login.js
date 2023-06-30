import SignPage from '../SignPage/SignPage'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { useState } from 'react'

function Login({ onLogin }) {

  const { values, handleChange, errors, isValid } =
    useFormWithValidation()

  const [isBlocked, setIsBlocked] = useState(false)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsBlocked(true)
    await onLogin(values, 'Успешный вход')
    setIsBlocked(false)
  }

  return (
    <SignPage btnText="Войти"
              pageTitle="Рады видеть!"
              hintText="Ещё не зарегистрированы?"
              hintLinkText="Регистрация"
              hintLink="/signup"
              onSubmit={handleSubmit}
              isValid={isValid}
    >
      <fieldset className="sign__inputs-container">
        <label className="sign__input-container">E-mail
          <input
            className={`sign__input ${errors.email && 'sign__input_accent'}`}
            value={values.email || ''}
            onChange={handleChange}
            type="email"
            name="email"
            minLength="5"
            maxLength="30"
            disabled={isBlocked}
            required
          />
          <span className="sign-input__error">{errors.email || ''}</span>
        </label>
        <label className="sign__input-container">Пароль
          <input
            className={`sign__input ${errors.password && 'sign__input_accent'}`}
            value={values.password || ''}
            onChange={handleChange}
            type="password"
            name="password"
            minLength="6"
            maxLength="30"
            disabled={isBlocked}
            required
          />
          <span className="sign-input__error">{errors.password || ''}</span>
        </label>
      </fieldset>
    </SignPage>
  )
}

export default Login