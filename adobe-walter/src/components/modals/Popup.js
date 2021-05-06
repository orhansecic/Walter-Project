import React from 'react';
import ReactDOM from 'react-dom';

import {FaRegFilePdf} from 'react-icons/fa';
import {BiX} from 'react-icons/bi';

const Popup = (props) =>{
    const defaultMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit."
    const date = new Date();

    if(props.isOpen === false){
        return(
            null
        )
    }else if(props.isOpen === true){
        if(props.invoice.status === "Pending")
            return ReactDOM.createPortal(
                <div>
                    <div className="overlay" onClick={props.onClose}/>
                    <div className="modal">
                        
                        <div className="modalContent">
                            <BiX size="20" className="exit" onClick={props.onClose}>X</BiX>
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
                </div>,
                document.querySelector("#modal")
            );

            /* APPROVED */

            if(props.invoice.status === "Approved")
            return ReactDOM.createPortal(
                <div>
                    <div className="overlay" onClick={props.onClose}/>
                    <div className="modal">
                        <div className="modalContent">
                            <span className="exit" onClick={props.onClose}>X</span>
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
                                <span className="button button--approve">Invoice Approved</span>
                                <span className="modalContent__date">{`Approved at ${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
                            {/* BUTTONS */}
                        </div>
                    </div>
                </div>,
                document.querySelector("#modal")
            );

            /* DECLINED */
            if(props.invoice.status === "Declined")
            return ReactDOM.createPortal(
                <div>
                    <div className="overlay" onClick={props.onClose}/>
                    <div className="modal">
                        
                        <div className="modalContent">
                            <span className="exit" onClick={props.onClose}>X</span>
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
                                <span className=" button button--decline">Invoice Declined</span>
                                <span className="modalContent__date">{`Declined at ${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
                            {/* BUTTONS */}
                        </div>
                    </div>
                </div>,
                document.querySelector("#modal")
            );
    }
}

export default Popup;