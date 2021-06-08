import produce from 'immer';
// Reducers
import { combineReducers } from 'redux';

const invoices = [];
const invoiceReducer = produce((draft, action) => {
    switch(action.type) {
        case "GET_INVOICES":
            let invoicesById = {};
            let invoicesOrder = [];

            action.payload.forEach(element => {
                invoicesById[element.id] = element;
                invoicesOrder.push(element.id);
            })
            console.log(invoicesById);
            console.log(invoicesOrder);
           return draft = action.payload;
        
        case "APPROVED_INVOICES":
            return draft = action.payload;

        case "PENDING_INVOICES":
            return draft = action.payload;

        case "NEW_INVOICE":
            draft.push(action.payload);
            return draft;
        
        case "SORT_INVOICES":
            return draft = action.payload;
    }
}, invoices);


// const INITIAL_STATE = {}

// const invoiceReducer = produce((draft, action) => {
//     switch (action.type) {
//         case "GET_INVOICES":
//             console.log("----------");
//             draft.rawInvoices = action.payload;
//             let invoicesById = {};
//             let invoicesOrder = [];
//             action.payload.forEach(element => {
//                 invoicesById[element.id] = element;
//                 invoicesOrder.push(element.id);
//             })
//             draft.invoicesById = invoicesById;
//             draft.invoicesOrder = invoicesOrder;
//             console.log(draft.rawInvoices);
//             break
//     }
// }, INITIAL_STATE)

// const invoices = {};

// const invoiceReducer = produce((draftState, action) => {
//     switch(action.type){
//         case "GET_INVOICES":
//             console.log(action.payload);
//             draftState.rawInvoices = action.payload;

//         case "APPROVED_INVOICES":
//             draftState.rawInvoices = action.payload;

//         case "PENDING_INVOICES":
//             draftState.rawInvoices = action.payload;
        
//          case "NEW_INVOICE":
//             draftState.rawInvoices = action.payload;

//             // [...invoices, action.payload];
//         case "SORT_INVOICES":
//             draftState.rawInvoices = action.payload;
        
//         default:
//             return draftState;
// }
// }, invoices)
// const invoiceReducer = (invoices = [], action) =>{
//     switch(action.type){
//         case "GET_INVOICES":
//             return action.payload;

//         case "APPROVED_INVOICES":
//             return action.payload;

//         case "PENDING_INVOICES":
//             return action.payload;
        
//          case "NEW_INVOICE":
//             return produce(invoices, (draftState) => {
//                 draftState.push(action.payload);
//             })
//             //return [...invoices, action.payload];
//         case "SORT_INVOICES":
//             return action.payload;

//         default: 
//             return invoices;
//     }
// };

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