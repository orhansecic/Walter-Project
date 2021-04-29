import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {pendingActionCreator} from '../actions';
import Invoice from './main/Invoice';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

class Pending extends React.Component{
    componentDidMount(){
        this.props.pendingActionCreator();
    }

    mapPendingInvoices = () =>{
        return this.props.pendingInvoices.map((invoice) => {
            return <Invoice key={invoice.id} invoice={invoice}/>
        })
    }

    render(){
        return(
            <div>
                <div className="content">
                    <div className="sort">
                        <div>
                            <Link to="/" className="sort__item sort__item">All</Link>
                            <Link to="/pending" className=" sort__item content--underline content--active">Pending</Link>
                            <Link to="/approved" className="sort__item">Approved</Link>
                        </div>
                        <div>
                            <span className="sort__item--right"><span className="sort__item--faded">Filter period: </span>Dec 19 - Feb 20 <RiArrowDropDownLine/></span>
                            <span className="sort__item--right"><span className="sort__item--faded">Sort by: </span>Last added <RiArrowDropDownLine/></span>
                            <span className="sort__item--right"><span className="sort__item--faded">Showing </span>{this.mapPendingInvoices().length} <RiArrowDropDownLine/></span>
                            <AiOutlineLeft />
                            <AiOutlineRight/>
                        </div>
                        
                    </div>
                    {this.mapPendingInvoices()}
                </div>
            </div>
        ); 
    }
}

const mapStateToProps = (state) =>{
    return{
        pendingInvoices: state.invoices,
    }
}

export default connect (mapStateToProps,{
    pendingActionCreator: pendingActionCreator,
}) (Pending); 