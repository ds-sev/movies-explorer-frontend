import './NotFoundPage.css'
import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const goBack = useNavigate()
  return (
    <main className="not-found-page">
      <h2 className="not-found-page__title">404</h2>
      <p className="not-found-page__description">Страница не найдена</p>
      <button className="not-found-page__back _button" onClick={() => goBack(-1)}>Назад</button>
    </main>
  )
}

export default NotFoundPage