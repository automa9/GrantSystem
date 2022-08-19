import React from 'react'
import { projectAuth, projectStorage, projectFirestore } from '../firebase/config'
import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'

export const useUpload = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const uploadss = async (docuName, file_) => {
        setError(null)
        setIsPending(true)

        try {
            //upload documents 
            const uploadPath = `document/${docuName}/${file_.name}`
            const docu_ = await projectStorage.ref(uploadPath).put(file_)
            const docuUrl = await docu_.ref.getDownloadURL()

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
    return { uploadss, isPending, error,  }
}
