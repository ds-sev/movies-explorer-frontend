import './AboutProject.css'

function AboutProject() {
  return (
    <section className="about-project main-section-wrapper" id="about-project">
      <h2 className="main-section__title">О проекте</h2>
      <div className="about-project__description-container">
        <div className="about-project__description-block">
          <h4 className="description-block__title">Работа над проектом включала 5&nbsp;этапов</h4>
          <p className="description-block__subtitle">Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и
            финальные доработки.</p>
        </div>
        <div className="about-project__description-block">
          <h4 className="description-block__title">На&nbsp;выполнение работы ушло
            5&nbsp;недель</h4>
          <p className="description-block__subtitle">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий
            дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__graph graph">
        <div className="graph__sector">
          <span className="graph__sector-period graph__sector-period_accent">1&nbsp;неделя</span><span
          className="graph__sector-description">Back-end</span></div>
        <div className="graph__sector">
          <span className="graph__sector-period">4&nbsp;недели</span><span
          className="graph__sector-description">Front-end</span></div>
      </div>
    </section>
  )
}

export default AboutProject
