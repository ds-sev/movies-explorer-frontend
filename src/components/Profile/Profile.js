import './Profile.css'
import Header from '../Header/Header'

function Profile({}) {
  const userName = 'Виталий Белебердаевич Автоматенченчичнеко'
  const userEmail = 'pochta@yandex.ru'

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }
  return (
    <>
    <Header />
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${userName}!`}</h2>
        <form onSubmit={handleSubmit}>
          <label className="profile__field">
            <span className="profile__field-description">Имя</span>
            <input
              className="profile__field-value"
              value={userName || ''}
              name="name"
              type="text"
              placeholder="Имя"
              minLength="6"
              maxLength="30"
              required
            />
          </label>
          <label className="profile__field">
            <span className="profile__field-description">E-mail</span>
            <input
              className="profile__field-value"
              name="email"
              type="email"
              value={userEmail || ''}
              placeholder="Email"
              minLength="2"
              maxLength="30"
              required
            />
          </label>
          <button className="profile__edit _button" type="submit">Редактировать</button>
        </form>
        <button className="profile__signout _button">Выйти из аккаунта</button>
      </section>
    </>
  )
}

export default Profile