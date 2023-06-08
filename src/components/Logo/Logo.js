import './Logo.css'
import { Link } from 'react-router-dom'

function Logo({}) {
  return (
    <Link to="/">
      <div className="logo _button"></div>
    </Link>
  )
}

export default Logo