import React from 'react'
import { Link } from 'react-router-dom'

import './ToQuiz.css'

export default function ToQuiz() {
  return (

    <div className='quiz-list'>
    <div>
     <h2 className='class-title'>Quizez</h2>
        <div className='card'>
            <h2>Quiz1</h2>
            <Link to={'/quiz'}>
                <h4>Mock Quiz</h4>    
            </Link>      
        </div>
    </div>
    </div>
  )
}
