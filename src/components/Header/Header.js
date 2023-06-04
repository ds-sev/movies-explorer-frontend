import './Header.css'
import logoPath from '../../images/logo.svg'
// import logo from '../images/logo.svg'
// import burgerIcon from '../images/icons/burger.svg'
// import closeIcon from '../images/icons/close.svg'

function Header({

                }) {
  return (

      <header className="header _wrapper">
        <a href="#"><img src={logoPath} alt="логотип" className="header__logo" /></a>
        <button className="header__burger-menu _button"></button>

      </header>

  )
}

export default Header