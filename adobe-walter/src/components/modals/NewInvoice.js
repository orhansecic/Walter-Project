import React from 'react';
import {connect} from 'react-redux';

import {newIncvoiceActionCreator} from '../../actions';

class NewInvoice extends React.Component{
    constructor(props){
        super(props);

        this.inputDate = React.createRef();
        this.inputPrice = React.createRef();
        this.inputDueDate = React.createRef();
        this.inputComment = React.createRef();
    }
    submitInvoice = () =>{
        this.props.newIncvoiceActionCreator({
            invoiceName: "New Invoice.pdf",
            date: this.inputDate.current.value,
            issuedBy: "Orhan Šečić",
            cost: `${this.inputPrice.current.value} KM`,
            status: "Pending",
            dueDate: this.inputDueDate.current.value,
            comment: this.inputComment.current.value,
        });
        this.props.closeModal();
    }

    render(){
        if(this.props.isOpen === false){
            return(
                null
            );
        }else if(this.props.isOpen === true){
            return(
                <div>
                    <div className="overlay"></div>
                    <div className="modal">
                        <div className="modalContent">
                            <span className="exit" onClick={this.props.closeModal}>X</span>
                            <h3>New Invoice</h3>
                            <hr></hr>
                            <span className="modalContent__information">Information</span>

                            <div className="modalContent__row--date">
                                <span>Issue Date</span>
                                <span>Due Date</span>
                                <input ref={this.inputDate} placeholder="DD/MM/YYYY"></input>
                                <input ref={this.inputDueDate} placeholder="DD/MM/YYYY"></input>
                            </div>

                            <div className="modalContent__row--comment">
                                <span>Notes/comments</span>
                                <br></br>
                                <input ref={this.inputComment} placeholder="Write description"></input>
                            </div>

                            <div className="modalContent__row--price">
                                <span>Price</span>
                                <br></br>
                                <input ref={this.inputPrice} placeholder="Enter price"></input>
                            </div>
                            <hr></hr>
                            <div className="modalContent__row--upload">
                                <span>Upload File</span>
                                <input placeholder="Missing Value"></input>
                            </div>
                            <div className="modalContent__row--button">
                                <button className="button--invoice" onClick={this.submitInvoice}>Send Invoice</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
};

export default connect (null, {
    newIncvoiceActionCreator: newIncvoiceActionCreator,
}) (NewInvoice);