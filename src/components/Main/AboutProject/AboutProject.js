import './AboutProject.css'
import myPhotoPath from '../../../images/author/me.jpg'
import logoPath from '../../../images/logo.svg'

function AboutProject({}) {
  return (
    <>
      <section className="main-section">
        <h1 className="main-section__title">Учебный проект студента факультета Веб-разработки.</h1>
        <nav>
          <ul className="main-section__navigation">
            <li className="main-section__link-container"><a href="#" className="main-section__link">О
              проекте</a></li>
            <li className="main-section__link-container"><a href="#"
                                                            className="main-section__link">Технологии</a>
            </li>
            <li className="main-section__link-container"><a href="#"
                                                            className="main-section__link">Студент</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="about-project _main-wrapper">
        <h2 className="section__title">О проекте</h2>
        <div className="about-project__description-container">
          <div className="about-project__description-block">
            <h4 className="description-block__title">Дипломный проект включал 5&nbsp;этапов</h4>
            <p className="description-block__subtitle">Составление плана, работу над бэкендом,
              вёрстку, добавление функциональности и
              финальные доработки.</p>
          </div>
          <div className="about-project__description-block">
            <h4 className="description-block__title">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h4>
            <p className="description-block__subtitle">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн,
              которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__graph graph">
          <div className="graph__sector">
            <span className="graph__sector-period graph__sector-period_accent">1&nbsp;неделя</span><span
            className="graph__sector-description">Back-end</span></div>
          <div className="graph__sector"><span className="graph__sector-period">4&nbsp;недели</span><span
            className="graph__sector-description">Front-end</span></div>
        </div>
      </section>
      <section className="techs-section _main-wrapper">
        <h2 className="section__title">Технологии</h2>
        <h4 className="techs-section__title">7&nbsp;технологий</h4>
        <p className="techs-section__subtitle">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии,
          которые применили в&nbsp;дипломном проекте.</p>
        <ul className="techs-section__list">
          <li className="techs-section__list-item">HTML</li>
          <li className="techs-section__list-item">CSS</li>
          <li className="techs-section__list-item">JS</li>
          <li className="techs-section__list-item">React</li>
          <li className="techs-section__list-item">Git</li>
          <li className="techs-section__list-item">Express.js</li>
          <li className="techs-section__list-item">mongoDB</li>
        </ul>
      </section>
      <section className="about-me _main-wrapper">
        <h2 className="section__title">Студент</h2>
        <div className="about-me__info-container info-container">
          <div className="info-container__text">
            <div>
              <h4 className="about-me__title">Дмитрий</h4>
              <p className="about-me__subtitle">Фронтенд-разработчик, 36&nbsp;лет</p>
              <p className="about-me__paragraph">Я&nbsp;родился и&nbsp;живу в&nbsp;Севастополе, закончил факультет
                радиоэлектроники
                в&nbsp;СВМИ им. П.С. Нахимова. У&nbsp;меня есть жена
                и&nbsp;сын. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Всерьез увлекся
                программированием с
                середины 2022&nbsp;г. После того, как прошёл курс по&nbsp;веб-разработке, начал
                заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
            </div>
            <a className="about-me__link" href="https://github.com/ds-sev" target={'_blank'}>Github</a>
          </div>
          <img className="info-container__photo" src={myPhotoPath} alt="мое фото" />
        </div>
      </section>
      <section className="portfolio _main-wrapper">
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
    </>
  )
}

export default AboutProject