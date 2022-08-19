import React from 'react'
import { projectFirestore } from '../firebase/config'
import { useState, useEffect } from 'react'
import { useQuiz } from './useQuiz'
import '../firebase/config'


export const useAddQuiz = () => {

  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { trying } = useQuiz()

  const addQuiz = async (currentQuizId, currentQuestionId, question, correctAnswer, optionTwo, optionThree, optionFour ) => {

    setError(null)
    setIsPending(true)
  
    try{
      await projectFirestore().collection('Quizzes').doc(currentQuizId).collection('QNA').doc(currentQuestionId)
      .set({
        question,
        correctAnswer,
        optionTwo,
        optionThree, 
        optionFour
        });
    }
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }

  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addQuiz, error, isPending }
   
};
