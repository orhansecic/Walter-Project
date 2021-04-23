import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

const Popup = () =>{
    const[modalState, setModalState] = useState(false);

    return(
        <div>
            <button onClick={() => {setModalState(true)}}>Open Modal</button>

            <Modal 
            isOpen={modalState} 
            onRequestClose={() => {setModalState(false)}}
            style={{
                overlay:{
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                },
                content:{
                    position: "absolute",
                    right: 0,
                    left: "auto",
                    top: "120px",
                    bottom: "120px",
                }
            }}
            >
                <h4>Invoice Name.pdf</h4>
                <hr/>
                <div className="details">
                    <div>
                        <span>Issue Date</span>
                        <br></br>
                        <span>Date</span>
                    </div>
                    <div>
                        <span>Issue Date</span>
                        <br></br>
                        <span>Date</span>
                    </div>
                    <div>
                        <span>Issue Date</span>
                        <br></br>
                        <span>Date</span>
                    </div>
                </div>
                <span>Notes/Comments</span>
                <p>
                    Lorem Ipsum
                </p>
                <hr/>
                <button onClick={() =>{setModalState(false)}}>Close Modal</button>
            </Modal>
        </div>   
    );
}

export default Popup;