import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

//Components
import Header from './Header.js';
import Invoices from './All.js';
import Pending from './Pending.js';
import HeaderMain from './main/HeaderMain.js';
import Approved from './Approved.js';
import Popup from './Popup.js';

import {invoicesActionCreator, approvedActionCreator, pendingActionCreator} from '../actions/index.js';

import '../styles/style.css';

class App extends React.Component{
    createMockInstance(){
        const mock = new MockAdapter(axios, {delayResponse: 4000});
        mock.onGet("/invoices").reply(200, {
            invoices: [
                {id: 1, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Approved"},
                {id: 2, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Jane Doe", cost: "120 KM", status: "Approved"},
                {id: 3, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Sugar Ray", cost: "250 KM", status: "Approved"},
                {id: 4, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Joe Rogan", cost: "20 KM", status: "Approved"},
                {id: 5, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "G.I. Joe", cost: "185 KM", status: "Approved"},
                {id: 6, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
                {id: 7, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
                {id: 8, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
                {id: 9, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
                {id: 10, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
                {id: 11, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Declined"},
                {id: 12, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Declined"},
                {id: 13, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Declined"},
                {id: 14, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Declined"},
                {id: 15, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Declined"},
            ]
        })

        mock.onGet("/approved").reply(200,{
            invoices:[
                {id: 1, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Approved"},
                {id: 2, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Jane Doe", cost: "120 KM", status: "Approved"},
                {id: 3, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Sugar Ray", cost: "250 KM", status: "Approved"},
                {id: 4, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Joe Rogan", cost: "20 KM", status: "Approved"},
                {id: 5, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "G.I. Joe", cost: "185 KM", status: "Approved"},
            ]
        })

        mock.onGet("/pending").reply(200,{
            invoices:[
                {id: 6, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
                {id: 7, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
                {id: 8, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
                {id: 9, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
                {id: 10, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
            ]
        })
    }
    componentDidMount(){
        this.createMockInstance();
    }
    
    render(){
        return(
                <BrowserRouter>
                    <Route path="/" component={Header}></Route>
                    <Route path="/" component={HeaderMain}></Route>
                    <Route path="/" exact component={Invoices}></Route>
                    <Route path="/pending" component={Pending}></Route>
                    <Route path="/approved" component={Approved}></Route>
                    <Route path="/example" component={Popup}></Route>
                </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        invoices: state.invoices,
    }
}

export default connect (mapStateToProps,
    {
        invoicesActionCreator: invoicesActionCreator,
        approvedActionCreator: approvedActionCreator,
        pendingActionCreator: pendingActionCreator,
    }) (App);