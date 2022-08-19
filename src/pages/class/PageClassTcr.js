import { useParams } from 'react-router-dom'
import { useDocument} from '../../hooks/useDocument'
import {useState } from 'react'
import React from 'react'
import { useUpload } from '../../hooks/useUpload'

//style
import './PageClass.css'


export default function PageClassTcr() {

    const {id} = useParams()
    const {error_ , document} = useDocument('class', id)
    const [docuName, setDocuName] = useState("")
    const [docu, setDocu] = useState('')
    const [modal, setModal] = useState(false);
    const [file, setFile] = useState('')
    const [formError, setFormError] = useState(null)
    
    const current = new Date();
    const date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const { uploadss, isPending, error } = useUpload()

    const handleSubmit = async (e) => {
        setDocu(null)
        let selected = e.target.files[0]
        console.log(selected)
      };

    const handleFileChange = (e) => {
        setDocu(null)
        let selected = e.target.files[0]
        console.log(selected)

        uploadss(docuName, file)
    }

    if (error) {
        return <div className='error'>{error}</div>
    }

    if(!document){
        return<div className="loading">Loading...</div>
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className="class-details">
            <div className='titlebox'>
                <h1>{document.subject}</h1>
                <h2>{document.classroom}</h2>
                <h4>{document.year}</h4>
            </div>
            <hr/>
            <h2>{date}</h2>
            <div>             
                <div>
                    <div>
                        <a href="https://www.myattendancetracker.com/attendance">
                        <button 
                            onClick={toggleModal}
                            className="btn-modal-1">
                                + Create Attendance
                        </button>
                        </a>
                    </div>
                    <form className='auth-form'>
                        <h2>File Submission</h2>
                            <label>
                                <span>File Name:</span>
                                <input 
                                type='text'
                                value={docuName}
                                onChange={(e) => setDocuName(e.target.value)}/>
                            </label>
                            <label>
                                <span>Document:</span>
                                <input type='file' accept="application/pdf" onChange={handleFileChange}/>
                            </label>
                            <button className="btn" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
