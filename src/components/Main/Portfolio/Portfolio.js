import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio main-section-wrapper">
      <h2 className="portfolio__title">Портфолио</h2>
      <a className="portfolio__link _link" href="https://ds-sev.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт
        <div className="portfolio__link-icon"></div>
      </a>
      <a className="portfolio__link _link" href="https://ds-sev.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт
        <div className="portfolio__link-icon"></div>
      </a>
      <a className="portfolio__link _link" href="https://mesto.litvinenko-d.nomoredomains.monster/" target="_blank" rel="noreferrer">Одностраничное приложение
        <div className="portfolio__link-icon"></div>
      </a>
    </section>
  )
}

export default Portfolio