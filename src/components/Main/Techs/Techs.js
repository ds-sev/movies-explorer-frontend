import './Techs.css'

function Techs({}) {
  return (
    <section className="techs-section main-section-wrapper" id="techs">
      <h2 className="main-section__title">Технологии</h2>
      <h4 className="techs-section__title">7&nbsp;технологий</h4>
      <p className="techs-section__subtitle">На&nbsp;курсе веб-разработки мы&nbsp;освоили
        технологии,
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
  )
}

export default Techs