import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import { useAuthContext } from '../hooks/useAuthContext'
//import { useCollection } from '../hooks/useCollection'
import { projectFirestore } from "../firebase/config"

//style & images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import SubjectIcon from '../assets/book.svg'
import QuizIcon from '../assets/quiz.svg'
import AttendanceIcon from '../assets/calendar.svg'

export default function Sidebar() {

const { user } = useAuthContext()

  return (
    <div className="sidebar">
        <div className= "sidebar-content">
            <div className="sidebar-tajuk">
                <p>GrantSystem</p>
            </div>
            <div className="user">
                <Avatar src={user.photoURL} />
                <p>{user.displayName}</p>
                
            </div>
        </div>
        
        <nav className="links">
            <ul>
                <li>
                    <NavLink to="/my-class">
                        {/*<img src={SubjectIcon} alt="subject icon" />*/}
                        <span>Grant Applications</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/to-quiz">
                        
                        <span>Proposal Submissions</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/class">
                       
                        <span>Project Implimentation</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tcrquiz">
                      
                        <span>Approved Applications</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
