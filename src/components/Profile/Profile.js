import './Profile.css'
import Header from '../Header/Header'
import { useState } from 'react'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()

  const userName = 'Виталий'
  const userEmail = 'admin@admin'

  const { values, handleChange, errors, isValid } =
    useFormWithValidation()

  const [isProfileEditDisabled, setIsProfileEditDisabled] = useState(true)

  const handleProfileEditBtnClick = () => setIsProfileEditDisabled(false)

  const onSignoutClick = (evt) => {
    evt.preventDefault()
    // TEMP
    localStorage.clear()
    navigate('/signin')
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }
  return (
    <>
      <Header />
      <main className="profile">
        <h2 className="profile__title">{`Привет, ${userName}!`}</h2>
        <form className="profile__fields-container" onSubmit={handleSubmit}>
          <label className="profile__field">
            <span className="profile__field-description">Имя</span>
            <input
              className="profile__field-value"
              value={values.name || userName}
              onChange={handleChange}
              disabled={isProfileEditDisabled && 'disabled'}
              name="name"
              type="text"
              placeholder="Имя"
              minLength="6"
              maxLength="40"
              required
            />
            <span className="profile-input__error">{errors.name || ''}</span>
          </label>
          <label className="profile__field">
            <span className="profile__field-description">E-mail</span>
            <input
              className="profile__field-value"
              onChange={handleChange}
              disabled={isProfileEditDisabled && 'disabled'}
              name="email"
              type="email"
              value={values.email || userEmail}
              placeholder="Email"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="profile-input__error">{errors.email || ''}</span>
          </label>
          <div className="push"></div>
          {isProfileEditDisabled ? (
            <button className="profile__edit _button"
                    onClick={handleProfileEditBtnClick}>Редактировать</button>
          ) : (
            <button className={`profile__save-button _button ${!isValid && 'profile__save-button_disabled'}`}
                    onClick={handleSubmit}>Сохранить</button>
          )}
        </form>
        {isProfileEditDisabled && (
          <button className={`profile__signout _button`} onClick={onSignoutClick}>Выйти из
            аккаунта</button>
        )
        }
      </main>
    </>
  )
}

export default Profile