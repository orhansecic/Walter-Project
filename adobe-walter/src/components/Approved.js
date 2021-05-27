import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { approvedActionCreator, sortInvoices } from '../actions';
import Invoice from './main/Invoice.js';

/* Sort Helper Function */
import {CostASC} from './helper/Sort.js';
import {CostDES} from './helper/Sort.js';

import {DateASC} from './helper/Sort.js';
import {DateDES} from './helper/Sort.js';


class Invoices extends React.Component{
    
    componentDidMount(){
        this.props.approvedActionCreator();
    }
    mappedApprovedInvoices = () =>{
        return this.props.approvedInvoices.map((invoice) => {
            return <Invoice key={invoice.id} invoice={invoice}/>
        })
    }

    sortByCostASC = () =>{
        this.props.sortInvoices(CostASC(this.props.approvedInvoices));
    }

    sortByCostDES = () =>{
        this.props.sortInvoices(CostDES(this.props.approvedInvoices))
     }

    sortByDateASC = () =>{
        this.props.sortInvoices(DateASC(this.props.approvedInvoices));
    }

    sortByDateDES = () =>{
        this.props.sortInvoices(DateDES(this.props.approvedInvoices));
    }
     render(){
        if(this.props.pending === false){
            return(
                <div>
                    <div className="content">
                        <div className="sort">
                            <div className="sort__div1">
                                <Link to="/" className="sort__item">All</Link>
                                <Link to="/pending" className=" sort__item">Pending</Link>
                                <Link to="/approved" className="sort__item content--underline content--active">Approved</Link>
                            </div>
                            <div className="sort__div2">
                            <div className="sort__item__dropdown">
                                    <span className="sort__item--right dropbtn"><span className="sort__item--faded">Sort By: </span>Date</span>
                                    <div className="dropdown-content">
                                        <span onClick={this.sortByDateASC}>Ascending</span>
                                        <span onClick={this.sortByDateDES}>Descending</span>
                                    </div>
                                </div>
                                <div className="sort__item__dropdown">
                                    <span className="sort__item--right dropbtn"><span className="sort__item--faded">Sort By: </span>Cost</span>
                                    <div className="dropdown-content">
                                        <span onClick={this.sortByCostASC}>Ascending</span>
                                        <span onClick={this.sortByCostDES}>Descending</span>
                                    </div>
                                </div>
                                <span className="sort__item--right"><span className="sort__item--faded">Showing </span> {this.mappedApprovedInvoices().length}</span>
                            </div>
                            
                        </div>
                        {this.mappedApprovedInvoices()}
                    </div>
                </div>
            ); 
        } else if(this.props.pending === true){
            return(
                <div>
                    <div className="content">
                        <div className="sort">
                            <div className="sort__div1">
                                <Link to="/" className="sort__item">All</Link>
                                <Link to="/pending" className=" sort__item">Pending</Link>
                                <Link to="/approved" className="sort__item sort__item content--underline content--active">Approved</Link>
                            </div>
                            <div className="sort__div2">
                                <span className="sort__item--right"><span className="sort__item--faded">Sort By: </span>Date</span>
                                <span className="sort__item--right"><span className="sort__item--faded" >Sort By: </span>Cost</span>
                                <span className="sort__item--right"><span className="sort__item--faded">Showing </span> {this.mappedApprovedInvoices().length}</span>
                            </div>
                            
                        </div>
                        <div style={{textAlign: "center"}}>
                            <h1>The Content is Loading...</h1>
                        </div>
                    </div>
                </div>
            );
        }  
    };
};

const mapStateToProps = (state) =>{
    return{
        approvedInvoices: state.invoices,
        pending: state.pending,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        approvedActionCreator: () => {dispatch(approvedActionCreator())},
        sortInvoices: (sortedInvoices) => {dispatch(sortInvoices(sortedInvoices))}
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (Invoices);