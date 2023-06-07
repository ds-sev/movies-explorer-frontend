import './AboutMe.css'
import myPhotoPath from '../../../images/author/me.jpg'

function AboutMe({}) {
  return (
    <main className="about-me main-section-wrapper">
      <h2 className="main-section__title">Студент</h2>
      <div className="about-me__info-container info-container">
        <div className="info-container__text">
          <div>
            <h4 className="about-me__title">Дмитрий</h4>
            <p className="about-me__subtitle">Фронтенд-разработчик, 36&nbsp;лет</p>
            <p className="about-me__paragraph">Я&nbsp;родился и&nbsp;живу в&nbsp;Севастополе,
              закончил факультет
              радиоэлектроники
              в&nbsp;СВМИ им. П.С. Нахимова. У&nbsp;меня есть жена
              и&nbsp;сын. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Всерьез увлекся
              программированием с
              середины 2022&nbsp;г. После того, как прошёл курс по&nbsp;веб-разработке, начал
              заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
          </div>
          <a className="about-me__link"
             href="https://github.com/ds-sev"
             target={'_blank'}>Github</a>
        </div>
        <img className="info-container__photo" src={myPhotoPath} alt="мое фото" />
      </div>
    </main>
  )
}

export default AboutMe