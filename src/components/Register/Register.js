import './Register.css'
import '../Shared/SharedStyles.css'
import SignPage from '../SignPage/SignPage'
import { useEffect } from 'react'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'

function Register({}) {

  const { values, handleChange, errors, isValid, setIsValid, resetForm } =
    useFormWithValidation()

  useEffect(() => {
    resetForm()
    setIsValid(false)
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <SignPage btnText="Зарегистрироваться"
              pageTitle="Добро пожаловать!"
              hintText="Уже зарегистрированы?"
              hintLinkText="Войти"
              hintLink="/signin"
              onSubmit={handleSubmit}
              isValid={isValid}>
      <fieldset className="sign__inputs-container">
        <label className="sign__input-container">Имя
          <input
            className={`sign__input ${errors.name && 'sign__input_accent'}`}
            onChange={handleChange}
            value={values.name || ''}
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="sign-input__error">{errors.name || ''}</span>
        </label>
        <label className="sign__input-container">E-mail
          <input
            className={`sign__input ${errors.email && 'sign__input_accent'}`}
            onChange={handleChange}
            value={values.email || ''}
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
            onChange={handleChange}
            value={values.password || ''}
            type="password"
            name="password"
            minLength="6"
            maxLength="30"
            required
          />
          <span className="sign-input__error">{errors.password || ''}</span>
        </label>
      </fieldset>
    </SignPage>
  )
}

export default Register