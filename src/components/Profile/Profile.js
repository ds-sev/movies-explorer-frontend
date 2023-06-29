import './Profile.css'
import Header from '../Header/Header'
import { useContext, useEffect, useState } from 'react'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { useLocation } from 'react-router-dom'

function Profile({ onSignOut, onProfileEdit }) {

  const currentUser = useContext(CurrentUserContext)
const location = useLocation()

  // useEffect(() => {
  //   setUserName(currentUser.name)
  //   setUserEmail(currentUser.email)
  // }, [currentUser])
  //
  // const [userName, setUserName] = useState('')
  // const [userEmail, setUserEmail] = useState('')

  // useEffect(() => {
  //   setUserName(currentUser.name)
  //   setUserEmail(currentUser.email)
  // }, [currentUser])



  const { values, handleChange, errors, isValid, setIsValid } =
    useFormWithValidation()

  const [isProfileEditDisabled, setIsProfileEditDisabled] = useState(true)

  const handleProfileEditBtnClick = () => setIsProfileEditDisabled(false)

  const onSignoutBtnClick = (evt) => {
    evt.preventDefault()
    onSignOut()
  }



  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (isValid) {
      onProfileEdit({
        userName: values.name ? values.name : currentUser.name,
        userEmail: values.email ? values.email: currentUser.email
      })
    }
  }

  useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setIsValid(false)
    }
  }, [values.name, values.email])

  return (
    <>
      <Header />
      <main className="profile">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__fields-container" onSubmit={handleSubmit}>
          <label className="profile__field">
            <span className="profile__field-description">Имя</span>
            <input
              className="profile__field-value"
              value={values.name ?? currentUser.name}
              onChange={handleChange}
              disabled={isProfileEditDisabled && 'disabled'}
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
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
              value={values.email ?? currentUser.email}
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
          <button className={`profile__signout _button`} onClick={onSignoutBtnClick}>Выйти из
            аккаунта</button>
        )
        }
      </main>
    </>
  )
}

export default Profile