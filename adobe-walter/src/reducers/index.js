import produce from 'immer';
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
        
         case "NEW_INVOICE":
            return produce(invoices, (draftState) => {
                draftState.push(action.payload);
            })
            //return [...invoices, action.payload];
        case "SORT_INVOICES":
            return action.payload;

        default: 
            return invoices;
    }
};

const isOpenReducer = (isOpen = false, action) =>{
    switch(action.type){
        case "ISOPEN_TRUE":
            return action.payload;
        case "ISOPEN_FALSE":
            return action.payload;
        default:
            return isOpen;
    }
}

const isPending = (state = false, action) =>{
    switch(action.type){
        case "SET_PENDING":
            return action.payload;
        default:
            return state;
    }
}

const reducers = combineReducers({
    invoices: invoiceReducer,
    isOpen: isOpenReducer,
    pending: isPending,
});

export default reducers;