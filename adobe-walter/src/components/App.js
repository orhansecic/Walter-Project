import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

//Components
import Header from './Header.js';
import Invoices from './All.js';
import Pending from './Pending.js';
import HeaderMain from './main/HeaderMain.js';
import Approved from './Approved.js';
import {mockInvoices} from '../api/axios.js';

import '../styles/style.css';

class App extends React.Component{
    createMockInstance(){
        <mockInvoices />
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
                </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        invoices: state.invoices,
    }
}

export default connect (mapStateToProps) (App);