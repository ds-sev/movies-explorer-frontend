import './NotFoundPage.css'

function NotFoundPage({}) {
  return (
    <main className="not-found-page">
      <h2 className="not-found-page__title">404</h2>
      <p className="not-found-page__description">Страница не найдена</p>
      <button className="not-found-page__back _button">Назад</button>
    </main>
  )
}

export default NotFoundPage