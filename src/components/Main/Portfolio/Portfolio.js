import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio main-section-wrapper">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul>
        <li className="portfolio__list-item"><a className="portfolio__link _link"
                                                href="https://ds-sev.github.io/how-to-learn/"
                                                target="_blank"
                                                rel="noreferrer">Мой первый сайт
          <div className="portfolio__link-icon"></div>
        </a>
        </li>
        <li className="portfolio__list-item"><a className="portfolio__link _link"
                                                href="https://ds-sev.github.io/russian-travel/"
                                                target="_blank"
                                                rel="noreferrer">Знакомство с адаптивом
          <div className="portfolio__link-icon"></div>
        </a>
        </li>
        <li className="portfolio__list-item"><a className="portfolio__link _link"
                                                href="https://ds-sev.github.io/mesto-react/"
                                                target="_blank"
                                                rel="noreferrer">Страничка на React
          <div className="portfolio__link-icon"></div>
        </a>
        </li>
        <li className="portfolio__list-item"><a className="portfolio__link _link"
                                                href="https://ds-sev.github.io/nyamushka/"
                                                target="_blank"
                                                rel="noreferrer">Верстка блока с котиками
          <div className="portfolio__link-icon"></div>
        </a>
        </li>
        <li className="portfolio__list-item"><a className="portfolio__link _link"
                                                href="https://ds-sev.github.io/Only.digital_test-task/"
                                                target="_blank"
                                                rel="noreferrer">Интересное задание с адаптивом
          <div className="portfolio__link-icon"></div>
        </a>
        </li>
        <li className="portfolio__list-item"><a className="portfolio__link _link"
                                                href="https://meetingroom.acceleratorpracticum.ru/"
                                                target="_blank"
                                                rel="noreferrer">Командный проект MeetingRoom
          <div className="portfolio__link-icon"></div>
        </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
