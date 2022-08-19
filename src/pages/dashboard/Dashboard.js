import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'


import OnlineUser from '../../components/OnlineUser'
import Sidebar from '../../components/Sidebar'

//styles
import './Dashboard.css'

import React from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Dashboard() {

  const { user, authIsReady } = useAuthContext()
  return (
    <div>
      Dashboard
     
    </div>
    
    
  )
}
