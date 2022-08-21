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
          <>
          <li>
            <p className='studLogo'>Student Dashboard</p>
          </li>
          <li>
            {!isPending && <button className="btnLogout" onClick={logout}>Logout</button>}
            {isPending && <button className="btnLogout" disabled>Logging out...</button>}
          </li>
          </>
       
        )}
      </ul>
    </nav>
  )
}
