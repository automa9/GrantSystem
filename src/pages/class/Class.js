import React from 'react'
import { useState, useEffect } from 'react'

//styles
import './GrantApplications.css'

import { useAuthContext } from '../../hooks/useAuthContext'
import { projectFirestore } from '../../firebase/config'
import ModalClass from './ModalGrantApplication'
import ClassListTcr from '../../components/ClassListTcr'

export default function Class({ classes }) {

  const [users, setUsers] = useState([])
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  const { user } = useAuthContext()

  const customStyles = {
    
    overlay: {zIndex: -1}
  };

  //const { documents, error } = useCollection('class')
  
  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('class').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No class to load')
        setIsPending(false)
      } else {
        let results =[]
        snapshot.docs.forEach(doc => {
          results.push({ id:doc.id, ...doc.data() })
        })

        setData(results)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
    })
  }, [])

  return (
    <div>
      <h2 className='class-title'>All Class</h2>
      <ModalClass/>
      
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <ClassListTcr classes={data} style={customStyles} />}
    </div>
    
  )
}