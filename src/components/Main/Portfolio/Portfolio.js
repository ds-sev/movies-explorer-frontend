import './Portfolio.css'

function Portfolio({}) {
  return (
    <section className="portfolio main-section-wrapper">
      <h2 className="portfolio__title">Портфолио</h2>
      <div><a href="#"></a></div>
      <a className="portfolio__link" href="#">Статичный сайт
        <div className="portfolio__link-icon"></div>
      </a>
      <a className="portfolio__link" href="#">Адаптивный сайт
        <div className="portfolio__link-icon"></div>
      </a>
      <a className="portfolio__link" href="#">Одностраничное приложение
        <div className="portfolio__link-icon"></div>
      </a>
    </section>
  )
}

export default Portfolio