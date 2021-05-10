import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {pendingActionCreator, sortInvoices} from '../actions';
import Invoice from './main/Invoice';

class Pending extends React.Component{
    componentDidMount(){
        this.props.pendingActionCreator();
    }

    mapPendingInvoices = () =>{
        return this.props.pendingInvoices.map((invoice) => {
            return <Invoice key={invoice.id} invoice={invoice}/>
        })
    }

    sortByCostASC = () =>{
        const sortedInvoices = this.props.pendingInvoices.sort((a, b) => a.cost - b.cost);
        this.props.sortInvoices(sortedInvoices);
     }
 
     sortByCostDES = () =>{
         const sortedInvoices = this.props.pendingInvoices.sort((a, b) => b.cost - a.cost);
         this.props.sortInvoices(sortedInvoices);
      }
 
 
      sortByDateASC = () =>{
        console.log("clicked");
        const sortedInvoices = this.props.pendingInvoices.sort((a,b) => Date.parse(a.date) - Date.parse(b.date));
        this.props.sortInvoices(sortedInvoices);
    }

    sortByDateDES = () =>{
        console.log("clicked");
        const sortedInvoices = this.props.pendingInvoices.sort((a,b) => Date.parse(b.date) - Date.parse(a.date));
        this.props.sortInvoices(sortedInvoices);
    }


     render(){
        if(this.props.pending === false){
            return(
                <div>
                    <div className="content">
                        <div className="sort">
                            <div>
                                <Link to="/" className="sort__item">All</Link>
                                <Link to="/pending" className=" sort__item content--underline content--active">Pending</Link>
                                <Link to="/approved" className="sort__item">Approved</Link>
                            </div>
                            <div>
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
                                <span className="sort__item--right"><span className="sort__item--faded">Showing </span> {this.mapPendingInvoices().length}</span>
                            </div>
                            
                        </div>
                        {this.mapPendingInvoices()}
                    </div>
                </div>
            ); 
        } else if(this.props.pending === true){
            return(
                <div>
                    <div className="content">
                        <div className="sort">
                            <div>
                                <Link to="/" className="sort__item">All</Link>
                                <Link to="/pending" className=" sort__item sort__item content--underline content--active">Pending</Link>
                                <Link to="/approved" className="sort__item">Approved</Link>
                            </div>
                            <div>
                                <span className="sort__item--right"><span className="sort__item--faded">Sort By: </span>Date</span>
                                <span className="sort__item--right"><span className="sort__item--faded" >Sort By: </span>Cost</span>
                                <span className="sort__item--right"><span className="sort__item--faded">Showing </span> {this.mapPendingInvoices().length}</span>
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
}

const mapStateToProps = (state) =>{
    return{
        pendingInvoices: state.invoices,
        pending: state.pending,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        pendingActionCreator: () => {dispatch(pendingActionCreator())},
        sortInvoices: (sortedInvoices) => {dispatch(sortInvoices(sortedInvoices))}
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (Pending); 