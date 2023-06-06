// import '../../index.css'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'

function App() {

  return (
    <>

      <div className="body">
        <div className="page">
          <Header />
          <Movies />
          {/*<div className="ex"></div>*/}
          {/*<Main></Main>*/}


          <div className="push">
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

