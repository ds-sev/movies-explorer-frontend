import './Header.css'
import Logo from '../Logo/Logo'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header() {

  const location = useLocation()

  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const scrollController = {
    disableScroll() {
      document.body.style.cssText = `overflow: hidden`
    },
    enableScroll() {
      document.body.style.cssText = ''
    }
  }
  const handleBurgerBtnClick = () => {
    setIsBurgerOpen(true)
    scrollController.disableScroll()
  }
  const handleCloseBurgerClick = () => {
    setIsBurgerOpen(false)
    scrollController.enableScroll()
  }

// close menu by ESC-key
  useEffect(() => {
    function handleEscKeyClose(evt) {
      if (evt.code === 'Escape') {
        setIsBurgerOpen(false)
        scrollController.enableScroll()
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
      scrollController.enableScroll()
    }
  }

  return (
    <header className={`header _wrapper ${isBurgerOpen && 'header__burger-open'}`}>
      <Logo />
      <div className={`${isBurgerOpen && 'header__overlay'}`} onClick={handleOverlayClick}></div>
      {/*TEMP*/}
      {!localStorage.getItem('loggedIn') ? (
        <div className="header__unauthorized">
          <button className="header__signup-button _button"><Link to="/signup">Регистрация</Link>
          </button>
          <button className="header__signin-button _button"><Link to="/signin">Войти</Link></button>
        </div>
      ) : (
        <>
          <button className="header__burger-menu _button"
                  onClick={handleBurgerBtnClick}
                  type="button"></button>
          <nav className="header__navigation">
            <button className="header__burger-close-btn _button"
                    onClick={handleCloseBurgerClick}
                    type="button"></button>
            <ul className="header__nav-links-container">
              <li className="header__nav-link" onClick={handleCloseBurgerClick}>
                <Link to="/">Главная</Link></li>
              <li className={`header__nav-link ${location.pathname === '/movies' && 'header__nav-link_active'}`} onClick={handleCloseBurgerClick}>
                <Link to="/movies">Фильмы</Link></li>
              <li className={`header__nav-link ${location.pathname === '/saved-movies' && 'header__nav-link_active'}`} onClick={handleCloseBurgerClick}>
                <Link to="/saved-movies">Сохраненные фильмы</Link></li>
            </ul>
            <Link to="/profile"
                  className="header__navigation-account _button"
                  onClick={handleCloseBurgerClick}>Аккаунт
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