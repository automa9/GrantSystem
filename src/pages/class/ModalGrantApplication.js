import React from 'react'
import Select from 'react-select'

import { useClass } from '../../hooks/useClass'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useCollection } from '../../hooks/useCollection'
import { useHistory } from 'react-router-dom'

//styles

export default function ModalClass() {
  const subjects = [
    {value:"Bahasa Melayu", label:"Bahasa Melayu"},
    {value:"English", label: "English"},
    {value:"Mathematics", label:"Mathematics"},
    {value:"Science", label:"Science"},
    {value:"Sejarah", label:"Sejarah"},
    {value:"Additional Mathematics", label:"Additional Mathematics"},
    {value:"Physics", label: "Physics"},
    {value:"Biology", label:"Biology"},
    {value:"Chemistry", label:"Chemistry"},
    {value:"Accountant", label:"Accountant"}
  ]

  const [modal, setModal] = useState(false)
  const [subject_, setSubject] = useState('')
  const [school, setSchool] = useState('')
  const [classroom, setClass] = useState('')
  const [year, setYear] = useState('')
  const [formError, setFormError] = useState(null)
  const [assignedUsers, setAssignedUsers ] = useState([])
  
  const history = useHistory()
  const { addDocument, response } = useFirestore('class')
  const { documents } = useCollection('users')
  const { user } = useAuthContext()
  const [users, setUsers] = useState([])
  const { addClass, isPending, error } = useClass()

  // create user values for react-select
   {/*useEffect(() => {
    const options_ = documents.map(user => {
        return { value: user, label: user.displayName }
    })
    setUsers(options_)
  }, [documents]) */}
  
const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    if (!subject_) {
        setFormError('Please select a subject')
        return
    }

    if (!classroom) {
        setFormError('Please enter class')
        return
    }

    const assignedUsersList = assignedUsers.map((u) => {
        return {
            displayName: u.value.displayName,
            photoURL: u.value.photoURL,
            id: u.value.id
        }
    })


   await addDocument (subjectObj)       
   if(!response.error){
    history.push('/')
   }
    
}
  
  const subjectObj = {
      subject : subject_.value,
      classroom,
      school,
      year,
      //assignedUsersList,
      uID: user.uid
  }

  const toggleModal = () => {
    setModal(!modal)
    }

    return (
    <div>
        <button 
        
        onClick={toggleModal}
        className="btn-modal-1">
            + Add Application
        </button>

        {modal && (
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                <form className="create-subject" onSubmit={handleSubmit}>  
                    <label>
                    <span>Subject:</span>
                    <Select
                        onChange={(option) => setSubject(option)}
                        options={subjects}/>
                    </label>
                    <label>
                    <span>Class:</span>
                        <input 
                        required
                        type='text'
                        onChange={(e) => setClass(e.target.value)}
                        value={classroom}/>
                    </label>
                    <label>
                    <span>School:</span>
                        <input 
                        required
                        type='text'
                        onChange={(e) => setSchool(e.target.value)}
                        value={school}/>
                        </label>
                    <label>
                        <span>Year:</span>
                        <input 
                        required
                        type='number'
                        onChange={(e) => setYear(e.target.value)}
                        min={2020}
                        max={2030}
                        value={year}/>
                    </label>
                    {/*<label>
                        <span>Assign to:</span>
                        <Select
                            onChange={(option) => setAssignedUsers(option)}
                            options_={users}
                            isMulti
                        />
                    </label>*/}
                {!isPending && <button className='btn'>Confirm</button>}
                {isPending && <button className="btn" disabled>loading</button>}
                {toggleModal}
                {error && <div className='error'>{error}</div>}
                </form>
                
                <button className="close-modal" onClick={toggleModal}>
                {formError && <p className='error'>{formError}</p>}
                    CLOSE
                </button>
                </div>
            </div>
        </div>
        )}  
    </div>
    )
}