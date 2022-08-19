import React from 'react'
import { useState, useEffect } from 'react'

//style
import './Class.css'

import { useAuthContext } from '../../hooks/useAuthContext'
import { projectFirestore } from '../../firebase/config'
import ModalClass from './ModalClass'
import ClassList from '../../components/ClassList'
import ClassListTcr from '../../components/ClassListTcr'
import {Carousel} from 'react-responsive-carousel'

export default function MyClass({classes}) {

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
      <h2 className='class-title'>My Class</h2>
      <Carousel/>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <ClassList classes={data} style={customStyles}/>}
    </div>
    
  )
}
