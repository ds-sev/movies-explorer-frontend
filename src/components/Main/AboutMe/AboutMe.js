import './AboutMe.css';
import myPhotoPath from '../../../images/author/me.jpg';

function AboutMe() {
  return (
    <section className="about-me main-section-wrapper" id="about-me">
      <h2 className="main-section__title">Обо мне</h2>
      <div className="about-me__info-container info-container">
        <div className="info-container__text">
          <div>
            <h4 className="about-me__title">Дмитрий</h4>
            <p className="about-me__subtitle">Frontend-developer, 36&nbsp;лет</p>
            <p className="about-me__paragraph">Привет! Я&nbsp;программист из&nbsp;Севастополя.
              Занимаюсь веб-разработкой с&nbsp;начала 2022&nbsp;года. За&nbsp;это время прошел
              несколько курсов по&nbsp;верстке на&nbsp;платформе Stepik, курс по&nbsp;Angular
              в&nbsp;компании SolarLab и&nbsp;десятимесячный курс по&nbsp;Веб-разработке
              в&nbsp;Яндекс Практикум. В&nbsp;настоящее время я&nbsp;продолжаю самостоятельно
              развиваться и&nbsp;совершенствовать свои навыки, работая над интересными проектами.
              Я&nbsp;всегда открыт для новых предложений и&nbsp;возможностей сотрудничества. Буду
              рад принять участие в&nbsp;увлекательных проектах и&nbsp;внести свой вклад
              в&nbsp;развитие веб-технологий.</p>
          </div>
          <a className="about-me__link _link"
             href="https://github.com/ds-sev"
             target={'_blank'} rel="noreferrer">Посмотреть мой профиль на Github</a>
          <a className="about-me__link _link"
             href="https://t.me/Dmitry_Li_Sev"
             target={'_blank'} rel="noreferrer">Написать мне в Telegram</a>
        </div>
        <img className="info-container__photo" src={myPhotoPath} alt="мое фото" />
      </div>
    </section>
  );
}

export default AboutMe;
