import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherQuiz({quizzes}) {


  return (
    <div>
      <h1>Create Quiz</h1>
      <div>
        <Link to="./create-quiz ">
        <button className='btn'> + Start Create</button>
      </Link>
      </div>
      
      
      {/*quizzes.map(quiz =>(
        <div key={quiz.id} className="card">
          <h2>{quiz.title}</h2>
          
        </div>
      ))*/}
      
    </div>
    
  )
}
