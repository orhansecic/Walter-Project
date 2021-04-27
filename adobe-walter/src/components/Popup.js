import React from 'react';
import ReactDOM from 'react-dom';

import {FaRegFilePdf} from 'react-icons/fa';
import {BiX} from 'react-icons/bi';

const Popup = (props) =>{
    console.log(props.invoice);
    if(props.isOpen === false){
        return(
            null
        )
    }else if(props.isOpen === true){
        if(props.invoice.status === "Pending")
            return ReactDOM.createPortal(
                <div>
                    <div className="overlay"/>
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
                                <p className="details--justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor feugiat lacus sodales placerat. Morbi blandit imperdiet eros non pretium. Cras quis quam lectus.</p>
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
                    <div className="overlay"/>
                    <div className="modal">
                        <div className="modalContent">
                            <BiX size="20" className="exit" onClick={props.onClose}>X</BiX>                            {/* TITLE */}
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
                                <p className="details--justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor feugiat lacus sodales placerat. Morbi blandit imperdiet eros non pretium. Cras quis quam lectus.</p>
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
                                <span className=" button button--approve">Invoice Approved</span>
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
                    <div className="overlay"/>
                    <div className="modal">
                        
                        <div className="modalContent">
                            <BiX size="20" className="exit" onClick={props.onClose}>X</BiX>                            {/* TITLE */}
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
                                <p className="details--justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor feugiat lacus sodales placerat. Morbi blandit imperdiet eros non pretium. Cras quis quam lectus.</p>
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
                            {/* BUTTONS */}
                        </div>
                    </div>
                </div>,
                document.querySelector("#modal")
            );
    }
}

export default Popup;