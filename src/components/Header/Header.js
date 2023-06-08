import './Header.css'
import logoPath from '../../images/logo.svg'
import Logo from '../Logo/Logo'

function Header({}) {
  return (

    <header className="header _wrapper">
      <Logo />
      <button className="header__burger-menu _button"></button>
    </header>

  )
}

export default Header