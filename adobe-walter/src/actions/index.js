// ACTION CREATORS AND ACTIONS
import axios from 'axios';

const invoicesActionCreator = () =>{
    return function (dispatch, getState) {
        axios.get("/invoices")
        .then((value) => {
            dispatch({
                type: "GET_INVOICES",
                payload: value.data.invoices,
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export {invoicesActionCreator};

const approvedActionCreator = () =>{
    return function (dispatch, geState){
        axios.get("/approved")
        .then((value) => {
            dispatch({
                type: "APPROVED_INVOICES",
                payload: value.data.invoices,
            })
        })
        .catch((err) => {
            console.error(err)
        });
    }
}

export {approvedActionCreator};

const pendingActionCreator = () =>{
    return function (dispatch, getState){
        axios.get("/pending")
        .then((value) => {
            dispatch({
                type: "PENDING_INVOICES",
                payload: value.data.invoices,
            })
        })
        .catch((err) => {
            console.error(err)
        });
    };
};

export {pendingActionCreator};

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