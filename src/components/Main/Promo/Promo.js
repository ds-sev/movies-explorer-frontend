import './Promo.css'

function Promo() {
  return (
    <section className="promo">
      <div className="promo__title-container">
        <h1 className="promo__title">Литвиненко Дмитрий</h1>
        <h2 className="promo__subtitle">Веб-разработчик</h2>
      </div>

      <nav>
        <ul className="nav-tab">
          <li className="nav-tab__links _link"><a href="#about-project" className="nav-tab__link">О проекте</a></li>
          <li className="nav-tab__links _link"><a href="#techs"
                                                  className="nav-tab__link">Мой стек</a>
          </li>
          <li className="nav-tab__links _link"><a href="#about-me"
                                                  className="nav-tab__link">Обо мне</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Promo
