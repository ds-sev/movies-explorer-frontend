import './Footer.css'

function Footer() {
  return (
    <footer className="footer _wrapper">
      <span className="footer__project-info">Dmitry L. х BeatFilm project.</span>
      <div className="footer__container">
        <span className="footer__copyright">&#169; 2023</span>
        <ul className="footer__links-container">
          <li className="footer__link _link"><a href="https://www.linkedin.com/in/litvinenko-d/"
                                                target="_blank" rel="noreferrer">Дмитрий Литвиненко</a></li>
          <li className="footer__link _link"><a href="https://github.com/ds-sev"
                                                target="_blank" rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
