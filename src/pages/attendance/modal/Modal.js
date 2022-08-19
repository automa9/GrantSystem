import React, {useState} from "react"
import "./Modal.css"


export default function Modal() {

const [modal, setModal] = useState(false);
const toggleModal = () => {
    setModal(!modal)
}

  return (
    <div>
        <button 
        onClick={toggleModal}
        className="btn-modal">
            + Create Attendance
        </button>

        {modal && (
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                    perferendis suscipit officia recusandae, eveniet quaerat assumenda
                    id fugit, dignissimos maxime non natus placeat illo iusto!
                    Sapiente dolorum id maiores dolores? Illum pariatur possimus
                    quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                    placeat tempora vitae enim incidunt porro fuga ea.
                </p>
                <button className="close-modal" onClick={toggleModal}>
                    CLOSE
                </button>
                </div>
            </div>
        </div>
        )}

        
    </div>
  )
}
