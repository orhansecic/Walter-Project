import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios';

import { approvedActionCreator } from '../actions';
import Invoice from './main/Invoice.js';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

 
class Invoices extends React.Component{
    
    componentDidMount(){
        const mock = new MockAdapter(axios, {delayResponse: 4000});
        mock.onGet("/approved").reply(200,{
            invoices:[
                {id: 1, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Approved"},
                {id: 2, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Jane Doe", cost: "120 KM", status: "Approved"},
                {id: 3, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Sugar Ray", cost: "250 KM", status: "Approved"},
                {id: 4, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Joe Rogan", cost: "20 KM", status: "Approved"},
                {id: 5, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "G.I. Joe", cost: "185 KM", status: "Approved"},
            ]
        })
        this.props.approvedActionCreator();
    }
    mappedApprovedInvoices = () =>{
        return this.props.approvedInvoices.map((invoice) => {
            return <Invoice key={invoice.id} invoice={invoice}/>
        })
    }

    render(){
        return(
            <div>
                <div className="content">
                    <div className="sort">
                        <div>
                            <Link to="/" className="sort__item">All</Link>
                            <Link to="/pending" className=" sort__item content--active">Pending</Link>
                            <Link to="/approved" className=" sort__item content--underline">Approved</Link>
                        </div>
                        <div>
                            <span className="sort__item--right"><span className="sort__item--faded">Filter period: </span>Dec 19 - Feb 20 <RiArrowDropDownLine/></span>
                            <span className="sort__item--right"><span className="sort__item--faded">Sort by: </span>Last added <RiArrowDropDownLine/></span>
                            <span className="sort__item--right"><span className="sort__item--faded">Showing </span>{this.mappedApprovedInvoices().length} <RiArrowDropDownLine/></span>
                            <AiOutlineLeft />
                            <AiOutlineRight/>
                        </div>
                        
                    </div>
                    {this.mappedApprovedInvoices()}
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) =>{
    return{
        approvedInvoices: state.invoices,
    }
}
export default connect (mapStateToProps,{
    approvedActionCreator: approvedActionCreator,
}) (Invoices);