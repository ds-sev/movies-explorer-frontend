// import '../../index.css'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AboutProject from '../Main/AboutProject/AboutProject'

function App() {

  return (
    <>

      <div className="body">
        <div className="page">
          <Header />
          {/*<div className="ex"></div>*/}
          <AboutProject></AboutProject>

          <div className="push">
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

