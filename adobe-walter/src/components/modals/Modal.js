/* THIS IS ONLY PENDING MODAL */
import React, {useRef} from 'react';

import {BiX} from 'react-icons/bi';
import {FaRegFilePdf} from 'react-icons/fa';

const Modal = (props) =>{
    const defaultMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit."

    const overlay = useRef();
    const modal = useRef();

    return(
                 <div data-testid="test--element">
                    <div ref={overlay} className="overlay onOverlayOpen" onClick={() => props.onClose(modal.current, overlay.current)}/>
                    <div ref={modal} className="modal onModalOpen">
                        
                        <div className="modalContent">
                            <BiX data-testid="closeButton" size="20" className="exit" onClick={() => props.onClose(modal.current, overlay.current)}>X</BiX>
                            {/* TITLE */}
                            <h3>{props.invoice?.invoiceName}</h3>
                            <hr></hr>
                            {/* TITLE */}

                            {/* CONTENT ROW */}
                            <div className="modalContent__row--details">
                                <div>
                                    <span className="details--faded">Issue date</span>
                                        <br/>
                                    <span>{props.invoice?.date}</span>
                                </div>

                                <div>
                                    <span className="details--faded">Due date</span>
                                        <br/>
                                    <span>{props.invoice?.dueDate}</span>
                                </div>

                                <div>
                                    <span className="details--faded">Price</span>
                                        <br/>
                                    <span className="details--cost">{props.invoice?.cost}</span>
                                </div>
                            </div>
                            {/* CONTENT ROW */}

                            {/* COMMENT SECTION */}
                            <div className="modalContent__comment">
                                <span className="details--faded">Notes/Comment</span>
                                <br/>
                                <p className="details--justify">{!props.invoice?.comment ? defaultMessage : props.invoice?.comment}</p>
                            </div>
                            {/* CONTENT SECTION */}

                            <hr/>

                            {/* FILE NAME AND SIZE */}
                            <div className="modalContent__row--file">
                                <FaRegFilePdf size="20" className="invoice__pdf"/>
                                <div className="file__item--left">
                                    <span>File Name</span>
                                </div>
                                <div className="file__item--right">
                                    <span className="file--faded">Size</span>
                                </div>
                               
                            </div>
                            {/* FILE NAME AND SIZE */}

                            {/* BUTTONS */}
                            <div className="modalContent__row--buttons">
                                <button className="button button--decline">Decline</button>
                                <button className=" button button--approve">Approve</button>
                            </div>
                            {/* BUTTONS */}
                        </div>
                    </div>
                 </div>
        );
}

export default Modal;