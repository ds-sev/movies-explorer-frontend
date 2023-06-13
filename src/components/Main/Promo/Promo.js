import './Promo.css'

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav>
        <ul className="nav-tab">
          <li className="nav-tab__links _link"><a href="#about-project" className="nav-tab__link">О
            проекте</a></li>
          <li className="nav-tab__links _link"><a href="#techs"
                                                  className="nav-tab__link">Технологии</a>
          </li>
          <li className="nav-tab__links _link"><a href="#about-me"
                                                  className="nav-tab__link">Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Promo