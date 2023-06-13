import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
      <Header />
      {/*<main>*/}
      <Outlet />
      <div className="push"></div>
      {/*</main>*/}
      <Footer />
    </>
  )
}

export default Layout