import './Header.css'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header({}) {
  const isLoggedIn = true

  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const handleBurgerBtnClick = () => {
    setIsBurgerOpen(true)
  }
  const handleCloseBurgerBtn = () => setIsBurgerOpen(false)

// close menu by ESC-key
  useEffect(() => {
    function handleEscKeyClose(evt) {
      console.log(evt)
      if (evt.code === 'Escape') {
        setIsBurgerOpen(false)
      }
    }
    if (isBurgerOpen) {
      document.addEventListener('keydown', handleEscKeyClose)
    }
    return () => document.removeEventListener('keydown', handleEscKeyClose)
  })

// close menu by overlay-click
  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      setIsBurgerOpen(false)
    }
  }

  return (

    <header className={`header _wrapper ${isBurgerOpen && 'header__burger-open'}`}>

      <Logo />
      <div className={`${isBurgerOpen && 'header__overlay'}`} onClick={handleOverlayClick}></div>
      {!isLoggedIn ? (
        <>
          <Link to="/signup">Регистрация</Link>
          <Link to="/signin">Войти</Link>
        </>
      ) : (
        <>
          <button className="header__burger-menu _button"
                  onClick={handleBurgerBtnClick}
                  type="button"></button>
          <nav className="header__navigation">
            <button className="header__burger-close-btn _button"
                    onClick={handleCloseBurgerBtn}
                    type="button"></button>
            <ul className="header__nav-links-container">
              <li className="header__nav-link"><Link to="/">Главная</Link></li>
              <li className="header__nav-link"><Link to="/movies">Фильмы</Link></li>
              <li className="header__nav-link"><Link to="/saved-movies">Сохраненные фильмы</Link></li>
            </ul>
            <Link to="/profile" className="header__navigation-account _button">Аккаунт
              <div className="header__nav-account-icon"></div>
            </Link>
          </nav>
        </>
      )
      }
    </header>
  )
}

export default Header