import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {newIncvoiceActionCreator} from '../../actions';

class NewInvoice extends React.Component{
    constructor(props){
        super(props);

        this.inputDate = React.createRef();
        this.inputPrice = React.createRef();
        this.inputDueDate = React.createRef();
        this.inputComment = React.createRef();
        this.modal = React.createRef();
        this.overlay = React.createRef();
    }
    submitInvoice = () =>{
        this.props.newIncvoiceActionCreator({
            id: this.props.invoices.length + 1,
            invoiceName: "New Invoice.pdf",
            date: this.inputDate.current.value,
            issuedBy: "Orhan Šečić",
            cost: this.inputPrice.current.value,
            status: "Pending",
            dueDate: this.inputDueDate.current.value,
            comment: this.inputComment.current.value,

        });
        this.props.closeModal(this.modal.current, this.overlay.current);
    }

    render(){
        if(this.props.isOpen === false){
            return(
                null
            );
        }else if(this.props.isOpen === true){
            return ReactDOM.createPortal(
                <div>
                    <div ref={this.overlay}className="overlay onOverlayOpen" onClick={() => this.props.closeModal(this.modal.current, this.overlay.current)}></div>
                    <div ref={this.modal} className="modal onModalOpen">
                        <div className="modalContent">
                            <span className="exit" onClick={() => this.props.closeModal(this.modal.current, this.overlay.current)}>X</span>
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
                </div>,
                document.querySelector("#modal")
            );
        }
    };
};

const mapStateToProps = (state) => {
    return {
        invoices: state.invoices,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newIncvoiceActionCreator: (newInvoice) => {dispatch(newIncvoiceActionCreator(newInvoice))}
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (NewInvoice);