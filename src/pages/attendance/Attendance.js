import React, {useState} from "react"
import DatePicker from 'react-date-picker'
import { Link } from "react-router-dom";

//styles
import "./Attendance.css"


export default function Attendance() {

const [modal, setModal] = useState(false);
const [date, onChange] = useState(new Date());
const toggleModal = () => {
    setModal(!modal)
}

  return (
    <div>
    <a href="https://www.myattendancetracker.com/attendance">

        <button 
            onClick={toggleModal}
            className="btn-modal">
                + Create Attendance
        </button>
    </a>

        
        {/*modal && (
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <form className='create-attd'>
                        <div>
                            <span>Date:  </span>
                            <DatePicker onChange={onChange} value={date} />
                        </div>
                        
                        <div>
                            <span>Session:  </span>
                            <input type='text'/>
                        </div>
                        <div>
                            <span>Class:  </span>
                            <input type='text'/>
                        </div>
                        
                    </form>
                    
                    <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
        )*/}

        
    </div>
  )
}
