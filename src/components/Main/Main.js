import './Main.css'

import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'

function Main() {

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault()
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  )
}

export default Main