import SignPage from '../SignPage/SignPage'
import { useState } from 'react'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [isSignError, setIsSignError] = useState(false)

  const { values, handleChange, errors, isValid } =
    useFormWithValidation()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // TEMP
    if (values.email === 'admin@admin' && values.password === 'admin@admin') {
      localStorage.setItem('loggedIn', 'yes')
      navigate('/')
    } else {
      setIsSignError(true)
    }
  }

  return (
    <SignPage btnText="Войти"
              pageTitle="Рады видеть!"
              hintText="Ещё не зарегистрированы?"
              hintLinkText="Регистрация"
              hintLink="/signup"
              onSubmit={handleSubmit}
              isValid={isValid}
              isSignError={isSignError}
    >
      <fieldset className="sign__inputs-container">
        <label className="sign__input-container">E-mail
          <input
            className={`sign__input ${errors.email && 'sign__input_accent'}`}
            value={values.email || ''}
            onChange={handleChange}
            type="email"
            name="email"
            minLength="2"
            maxLength="30"
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
            required
          />
          <span className="sign-input__error">{errors.password || ''}</span>
        </label>
      </fieldset>
      {/*TEMP*/}
      <span style={{ position: 'absolute', top: '50%', opacity: .3 }}>*temp for login:<br /> email: admin@admin <br />pass: admin@admin</span>
    </SignPage>
  )
}

export default Login