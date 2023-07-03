import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Layout.css'

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
        <div className="push"></div>
      </main>
      <Footer />
    </>
  )
}

export default Layout