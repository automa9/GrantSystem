import { useState, useEffect } from 'react'
import { authReducer } from '../context/AuthContext'
import { projectAuth, projectStorage, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { useSignup } from './useSignup'

import React from 'react'

export const useClass = () => {

  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [counter, setCounter] = useState(1000)

  const increase = () => {
    setCounter(count => count+ 1)
   }

  const addClass = async (subject, classroom, school, years, uid ) => {
    setError(null)
    setIsPending(true)

    try{
        //await projectFirestore.collection('class').doc('classID-'+counter).collection(subject).doc('subject'+counter).set({
          await projectFirestore.collection('class').doc('classID-'+counter).set({
            counter,
            subject,
            uid,
            classroom,
            school,
            years
        }) 
        increase();

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    }
    
    catch(err) {
      if (!isCancelled){
        setError(err.message)
        setIsPending(false)
      }
    }
  }


  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addClass, error, isPending }
}
