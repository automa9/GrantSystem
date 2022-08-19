import { useParams } from 'react-router-dom'
import { useDocument} from '../../hooks/useDocument'
import {useState } from 'react'
import React from 'react'
import { projectStorage } from '../../firebase/config'
import { useUpload } from '../../hooks/useUpload'


//style
import './PageClass.css'


export default function PageClassStud() {

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
        e.preventDefault()
        setFormError(null)

        uploadss(docuName, file)

    }
    
    const handleFileChange = (e) => {
        setDocu(null)
        let selected = e.target.files[0]
        console.log(selected)
    }

    if (error) {
        return <div className='error'>{error}</div>
    }

    if(!document){
        return<div className="loading">Loading...</div>
    }


    return (
        <div className="class-details">
            <div className='titlebox'>
                <h1>{document.subject}</h1>
                <h3>{document.classroom}</h3>
            </div>
            <div>
                <hr/>
            <h2>{date}</h2>
                <div>
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
