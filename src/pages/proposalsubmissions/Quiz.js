import React from 'react'
import QuestionList from '../../components/QuestionList'
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

//style
import './Quiz.css'

export default function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [showScore, setShowScore] = useState(false)
  
  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
        setScore(score+1);
    }
    setClicked(true)
  };

  const handleNextQuestion =() => {
    setClicked(false);
    if (currentQuestion < QuestionList.length - 1)  {
      setCurrentQuestion(currentQuestion + 1)
    }else{
      setShowScore(true);
    }
  }

  return (
    <div><h1 className='title'>Mock Quiz</h1>
    <div className='quiz-wrapper'>
      {showScore ? (
        <div>
          <div className="completed">Status: Completed</div>
          <div className="score-section">
            Your Score : {score}/{QuestionList.length}
          </div>
        </div>
      ): (
      <div>
            <div className='question-wrapper'>
                <div className='question-count'>
                    Question {currentQuestion + 1} of {QuestionList.length}
                </div>
                <div className='question'>
                    {QuestionList[currentQuestion].question}
                </div>
            </div>
            <div className='answer-wrapper'>
                {QuestionList[currentQuestion].answersLists.map((answerOption) =>(
                    <li className='answer-list' key={uuidv4()}>
                        <button 
                        className={`answer-button ${
                          clicked && answerOption.isCorrect ? "correct" : ""}`}
                        onClick={() => handleCorrectAnswer(answerOption.isCorrect)}>
                            {answerOption.answer}
                        </button>
                    </li>
                ))}
            </div>
        <div>
          <button className='btn' 
            onClick={handleNextQuestion} disabled={!clicked}>
              Next
          </button>
        </div>
      </div>  
      )}
    </div>
    </div>
  );
};
