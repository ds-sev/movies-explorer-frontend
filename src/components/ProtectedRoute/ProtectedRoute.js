import { Navigate } from 'react-router-dom'

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return (
    props.isLoggedIn
    // localStorage.getItem('loggedIn') === 'true'
      ? <Component {...props} />
      : <Navigate to="/" replace />
  )
}

export default ProtectedRouteElement