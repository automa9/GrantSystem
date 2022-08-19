import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
//styles
import './Navbar.css'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className="navbar">
      <ul>
        {!user && (
          <>
            <li className='TitleSite'>UTM-MTDC Grant Management System</li>
            <li className='navContent'><Link to="/login"> Login </Link></li>
            <li className='navContent'><Link to="/signup"> Register </Link></li>
          </>
        )}

        {user && (
          <li>
            {!isPending && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <button className="btn" disabled>Logging out...</button>}
          </li>
        )}
      </ul>
    </nav>
  )
}
