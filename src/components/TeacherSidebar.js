import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import { useAuthContext } from '../hooks/useAuthContext'
import { projectFirestore } from "../firebase/config"

//style & images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import SubjectIcon from '../assets/book.svg'
import QuizIcon from '../assets/quiz.svg'
import AttendanceIcon from '../assets/calendar.svg'

export default function TeacherSidebar() {

const { user } = useAuthContext()
/* const [users, setUsers] = useState(null)
useEffect(() => {
    setIsPending (true)

        projectFirestore.collection('users').doc(id).get().then((doc) =>{
        console.log(doc)
        })

}, []) */

  return (
    <div className="sidebar">
        <div className="sidebar-content">
            <div className="sidebar-tajuk">
                <p> EduMy </p>
            </div>
            <div className="user">
                <Avatar src={user.photoURL} />
                <p>{user.displayName}</p>
                
            </div>
        </div>
        
        <nav className="links">
            <ul>
                <li>
                    <NavLink exact to="/">
                        <img src={DashboardIcon} alt="dashboard icon" />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/class">
                        <img src={SubjectIcon} alt="subject icon" />
                        <span>Class</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tcrquiz">
                        <img src={QuizIcon} alt="quiz icon" />
                        <span>Teacher Quiz</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/attendance">
                        <img src={AttendanceIcon} alt="attendance icon" />
                        <span>Attendance Link</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
