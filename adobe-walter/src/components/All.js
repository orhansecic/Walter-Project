import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { invoicesActionCreator, sortInvoices} from '../actions';
import Invoice from './main/Invoice.js';

/* Sort Helper Function */
import {CostASC} from './helper/Sort.js';
import {CostDES} from './helper/Sort.js';

import {DateASC} from './helper/Sort.js';
import {DateDES} from './helper/Sort.js';

class Invoices extends React.Component{
    
    componentDidMount(){
        this.props.invoicesActionCreator();
    }
    mappedInvoices = () =>{
        if(!this.props.invoices){
            return null
        }
        return this.props.invoices?.map((invoice) => {
            return <Invoice key={invoice.id} invoice={invoice}/>
        })
    }

    sortByCostASC = () =>{
        // let propInvoices = this.props.invoices.slice();
        // let sortedInvoices = propInvoices.sort((a,b) => a.cost - b.cost);
        //this.props.sortInvoices(sortedInvoices);
        this.props.sortInvoices(CostASC(this.props.invoices));
    }

    sortByCostDES = () =>{
        // let propInvoices = this.props.invoices.slice();
        // let sortedInvoices = propInvoices.sort((a,b) => b.cost - a.cost);
        // this.props.sortInvoices(sortedInvoices);
        this.props.sortInvoices(CostDES(this.props.invoices))
     }

    sortByDateASC = () =>{
        // const propInvoices = this.props.invoices.slice();
        // const sortedInvoices = propInvoices.sort((a,b) => Date.parse(a.date) - Date.parse(b.date));
        // this.props.sortInvoices(sortedInvoices);
        this.props.sortInvoices(DateASC(this.props.invoices));
    }

    sortByDateDES = () =>{
        // const propInvoices = this.props.invoices.slice();
        // const sortedInvoices = propInvoices.sort((a,b) => Date.parse(b.date) - Date.parse(a.date));
        // this.props.sortInvoices(sortedInvoices);
        this.props.sortInvoices(DateDES(this.props.invoices));
    }
    render(){
        if(this.props.pending === false){
            return(
                <div>
                    <div className="content">
                        <div className="sort">
                            <div className="sort__div1">
                                <Link to="/" className="sort__item sort__item content--underline content--active">All</Link>
                                <Link to="/pending" className=" sort__item">Pending</Link>
                                <Link to="/approved" className="sort__item">Approved</Link>
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
                                <span className="sort__item--right"><span className="sort__item--faded">Showing </span> {/*this.mappedInvoices().length*/}</span>
                            </div>
                            
                        </div>
                        {this.mappedInvoices()}
                    </div>
                </div>
            ); 
        } else if(this.props.pending === true){
            return(
                <div>
                    <div className="content">
                        <div className="sort">
                            <div className="sort__div1">
                                <Link to="/" className="sort__item sort__item content--underline content--active">All</Link>
                                <Link to="/pending" className=" sort__item">Pending</Link>
                                <Link to="/approved" className="sort__item">Approved</Link>
                            </div>
                            <div className="sort__div2">
                                <span className="sort__item--right"><span className="sort__item--faded">Sort By: </span>Date</span>
                                <span className="sort__item--right"><span className="sort__item--faded" >Sort By: </span>Cost</span>
                                <span className="sort__item--right"><span className="sort__item--faded">Showing </span> {/*this.mappedInvoices().length*/}</span>
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
        invoices: state.invoices,
        pending: state.pending,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        invoicesActionCreator: () => {dispatch(invoicesActionCreator())},
        sortInvoices: (sortedInvoices) =>{dispatch(sortInvoices(sortedInvoices))}
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (Invoices);