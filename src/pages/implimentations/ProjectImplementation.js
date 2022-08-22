import React from 'react'
import { useState, useEffect } from 'react'

//styles


import { useAuthContext } from '../../hooks/useAuthContext'
import { projectFirestore } from '../../firebase/config'
import ClassListTcr from '../../components/ClassListTcr'

export default function Class({ classes }) {

  const [users, setUsers] = useState([])
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  const { user } = useAuthContext()


  return (
    <div className='contex'>
      <h2 className='class-title'>Financial Update</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
    </div>
    
  )
}