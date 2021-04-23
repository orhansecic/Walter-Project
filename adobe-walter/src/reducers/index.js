// Reducers
import { combineReducers } from 'redux';

const invoiceReducer = (invoices = [], action) =>{
    switch(action.type){
        case "GET_INVOICES":
            return action.payload;

        case "APPROVED_INVOICES":
            return action.payload;

        case "PENDING_INVOICES":
            return action.payload;
        
        default: 
            return invoices;
    }
};

const reducers = combineReducers({
    invoices: invoiceReducer,
});

export default reducers;