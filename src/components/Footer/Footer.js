import './Footer.css'

function Header({}) {
  return (

    <footer className="footer _wrapper">
      <span className="footer__project-info">Учебный проект Яндекс.Практикум х BeatFilm.</span>
      <div className="footer__container">
        <span className="footer__copyright">&#169; 2023</span>
        <ul className="footer__links-container">
          <li><a href="#">Дмитрий Литвиненко</a></li>
          <li className="footer__link"><a href="#">Github</a></li>
        </ul>
      </div>
    </footer>

  )
}

export default Header