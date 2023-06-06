import './Promo.css'

function Promo({}) {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav>
        <ul className="new-tab">
          <li className="new-tab__links"><a href="#" className="new-tab__link">О
            проекте</a></li>
          <li className="new-tab__links"><a href="#"
                                            className="new-tab__link">Технологии</a>
          </li>
          <li className="new-tab__links"><a href="#"
                                            className="new-tab__link">Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Promo