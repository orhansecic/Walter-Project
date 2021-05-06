// ACTION CREATORS AND ACTIONS
import axios from 'axios';

/*------------------------*/

const sortInvoices = (sortedInvoices) =>{
    return {
        type: "SORT_INVOICES",
        payload: sortedInvoices,
    }
}

export {sortInvoices};

const trueActionCreator = () =>{
    return {
        type: "ISOPEN_TRUE",
        payload: true,
    };
};

export {trueActionCreator};

const falseActionCreator = (e) =>{
    e.stopPropagation();
    return {
        type: "ISOPEN_FALSE",
        payload: false,
    };
};

export {falseActionCreator};

const newIncvoiceActionCreator = (newInvoice) =>{
    return {
        type: "NEW_INVOICE",
        payload: newInvoice,
    };
};

export {newIncvoiceActionCreator};


/* Redux Thunk */
/* Actions */
const getInvoices = (value) =>{
    return {
        type: "GET_INVOICES",
        payload: value.data.invoices,
    };
};

const approvedInvoices = (value) =>{
    return {
        type: "APPROVED_INVOICES",
        payload: value.data.invoices,
    }
};

const pendingInvoices = (value) =>{
    return {
        type: "PENDING_INVOICES",
        payload: value.data.invoices,
    }
};

const setPending = (pending) =>{
    return {
        type: "SET_PENDING",
        payload: pending
    }
};

/* Thunks */
const invoicesActionCreator = () =>{
    return function (dispatch, getState) {
        dispatch(setPending(true));

        axios.get("/invoices")
        .then((value) => {
            dispatch(getInvoices(value));
            dispatch(setPending(false));
        })
        .catch((err) => {
            console.log(err);
            dispatch(setPending(false));
        })
    }
}

export {invoicesActionCreator};

export const approvedActionCreator = () =>{
    return function (dispatch, geState){
        dispatch(setPending(true));

        axios.get("/approved")
        .then((value) => {
            dispatch(approvedInvoices(value));
            dispatch(setPending(false));
        })
        .catch((err) => {
            console.error(err);
            dispatch(setPending(false));
        });
    }
}

const pendingActionCreator = () =>{
    return function (dispatch, getState){
        dispatch(setPending(true));

        axios.get("/pending")
        .then((value) => {
            dispatch(pendingInvoices(value))
            dispatch(setPending(false));
        })
        .catch((err) => {
            console.error(err);
            dispatch(setPending(false));
        });
    };
};

export {pendingActionCreator};