import { useCollection } from '../hooks/useCollection'

//component
import Avatar from './Avatar'

//styles
import './OnlineUser.css'

export default function OnlineUser() {

const {isPending, error, documents } = useCollection('users')

  return (
    <div className='user-list'>
        <h2>All Users</h2>
        {isPending && <div>Loading users...</div>}
        {error && <div>{error}</div>}
        {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          
          <span className='name'>{user.displayName}</span>
          <Avatar src={user.photoURL} />
          {user.online && <span className="online-user"></span>}
        </div> 
        ))}
        
    </div>
  )
}
