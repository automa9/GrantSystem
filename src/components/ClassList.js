import { Link } from 'react-router-dom'
import React from 'react'

//style
import './ClassList.css'

export default function ClassList({ classes }) {

if (classes.length === 0) {
    return <div className="error">No class to load...</div>
}
    
  return (
    <div className="class-list">
      {classes.map(class_ => (
        <div key={class_.id} className="card" >
          <h2>{class_.subject}</h2>
          <Link to={`/class-list/${class_.id}`} key={class_.id}>
            <h4>{class_.classroom}</h4>
          </Link>
        </div>

        

      ))}
    </div>
  )
}
