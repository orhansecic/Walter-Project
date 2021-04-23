import React from 'react';

import {FaRegFilePdf} from 'react-icons/fa';
import {BiCheck, BiX} from 'react-icons/bi';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {AiOutlineClockCircle} from 'react-icons/ai';

const Invoice = (props) =>{
    if(props.invoice?.status === "Approved"){
        return(
            <div className="invoice">
                <FaRegFilePdf size="25" className="invoice__pdf"/>
                <span className="invoice__name">{props.invoice?.invoiceName}</span>
                <span>
                    <span className="invoice--active">Issue date</span>
                    <br/>
                    <span>{props.invoice?.date}</span>
                 </span>
                 <span>
                    <span className="invoice--active">Issue by</span>
                    <br/>
                    <span>{props.invoice?.issuedBy}</span>
                 </span>
                 <span>
                    <span className="invoice--active">Cost</span>
                    <br/>
                    <span>{props.invoice?.cost}</span>
                 </span>
                <BiCheck className="invoice__status--check"/>
                <span className="invoice__status--approved">{props.invoice?.status}</span>
                <BsThreeDotsVertical className="invoice__dots"size="25"/>
            </div>
        );
    }
    if(props.invoice?.status === "Pending"){
        return(
            <div className="invoice">
                <FaRegFilePdf size="25" className="invoice__pdf"/>
                <span className="invoice__name">{props.invoice?.invoiceName}</span>
                <span>
                    <span className="invoice--active">Issue date</span>
                    <br/>
                    <span>{props.invoice?.date}</span>
                 </span>
                 <span>
                    <span className="invoice--active">Issue by</span>
                    <br/>
                    <span>{props.invoice?.issuedBy}</span>
                 </span>
                 <span>
                    <span className="invoice--active">Cost</span>
                    <br/>
                    <span>{props.invoice?.cost}</span>
                 </span>
                 <AiOutlineClockCircle className="invoice__status--clock"/>
                <span className="invoice__status--pending">{props.invoice?.status}</span>
                <BsThreeDotsVertical className="invoice__dots"size="25"/>
            </div>
        );
    }
    if(props.invoice?.status === "Declined"){
        return(
            <div className="invoice">
                <FaRegFilePdf size="25" className="invoice__pdf"/>
                <span className="invoice__name">{props.invoice?.invoiceName}</span>
                <span>
                    <span className="invoice--active">Issue date</span>
                    <br/>
                    <span>{props.invoice?.date}</span>
                 </span>
                 <span>
                    <span className="invoice--active">Issue by</span>
                    <br/>
                    <span>{props.invoice?.issuedBy}</span>
                 </span>
                 <span>
                    <span className="invoice--active">Cost</span>
                    <br/>
                    <span>{props.invoice?.cost}</span>
                 </span>
                <BiX className="invoice__status--x"/>
                <span className="invoice__status--declined">{props.invoice?.status}</span>
                <BsThreeDotsVertical className="invoice__dots"size="25"/>
            </div>
        );
    }    
};

export default Invoice;