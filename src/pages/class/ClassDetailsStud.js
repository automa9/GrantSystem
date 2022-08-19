import { useParams } from 'react-router-dom'
import { useDocument} from '../../hooks/useDocument'
import {useState } from 'react'
import React from 'react'
import { FileUploader } from '../../components/FileUploader'

//style
import './PageClass.css'


export default function PageClass() {

    const {id} = useParams()
    const {error , document} = useDocument('class', id)
    const [name, setName] = useState("")
    const [docu, setDocu] = useState('')
    const [modal, setModal] = useState(false);

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

    const submitForm = () => {

      };

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className="class-details">
            <h1>{document.subject}</h1>
            <div>
                <h2>{document.classroom}</h2>
                <div>
                    <form>
                        <input 
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>

                        <FileUploader
                            onFileSelectSuccess={(file) => setDocu(file)}
                            onFileSelectError={({ error }) => alert(error)}
                        />

                        <button className="btn" onClick={handleFileChange}>Submit</button>

                    </form>
                </div>
            </div>           
            
        </div>

    )
}
