import React, {useState} from 'react';

import NewInvoice from '../modals/NewInvoice.js';

const HeaderMain = () =>{
    const[isOpen, setIsOpen] = useState(false);

    const openModal = () =>{
        setIsOpen(true);
    }
    const closeModal = (modal, overlay) =>{
        modal.className = "modal onModalClose";
        overlay.className = "overlay onOverlayClose";
        setTimeout(() => {
            setIsOpen(false)
        }, 1000)
    }

    return(
        <div className="header-main">

            <div className="header-main__item">
                <h3>Invoices</h3>
            </div>
            <div className="header-main__item">
                <button className="item__primButton" onClick={openModal}>New Invoice</button>
                <input className="item__input" placeholder="Search Invoices"></input>
                <NewInvoice isOpen={isOpen} closeModal={closeModal}/>
            </div>

        </div>
    );
};

export default HeaderMain;