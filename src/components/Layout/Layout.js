import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <div className="push"></div>
      <Footer />
    </>
  )
}

export default Layout