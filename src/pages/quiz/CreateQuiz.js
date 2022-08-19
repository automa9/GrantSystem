import React from 'react'
import { useQuiz, createQuiz } from '../../hooks/useQuiz'
import { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import { Navigate } from 'react-router'

//style
import "./Quiz.css"

export const CreateQuiz = () => {
    const [subject_, setSubject] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const {createQuiz, isPending, error} = useQuiz()

    const handleSubmit = async (e) => {
        const currentQuizId = Math.floor(100000 + Math.random() * 9000).toString();

        e.preventDefault();
        //save to projectFirestore
        createQuiz(currentQuizId, subject_, title, description)
        console.log(createQuiz)

        //navigate to add question string
       {/* navigation.navigate("AddQuestion",{
            currentQuizId: currentQuizId,
            currentQuizTitle: title
        })*/}

        //Reset
        setSubject('')
        setTitle('')
        setDescription('')
    };
    
  return (
    <div className='add-quiz'>
      <h1>Create Quiz</h1>
      <div className='container'>
        <form className='quiz-form' onSubmit={handleSubmit}>
          <label>
            <span>Subject:</span>
            <input 
              required
              type="text"
              onChange={(e) => setSubject(e.target.value)}
              value={subject_}/>
          </label>
          <label>
            <span>Title:</span>
            <input 
              required
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}/>
          </label>
          <label>
            <span>Class:</span>
            <input 
              required
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}/>
          </label>
          <button className="btn">Start Create</button>
          <Link to={`/add-question/`} >
            <button className="btn">To Add Question</button>
          </Link>
        </form>
      </div>
  </div>
  )
}

export default CreateQuiz