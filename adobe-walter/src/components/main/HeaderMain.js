import React from 'react';

import { FiSearch } from 'react-icons/fi';

const HeaderMain = () =>{
    return(
        <div className="header-main">

            <div className="header-main__item">
                <h3>Invoices</h3>
            </div>
            <div className="header-main__item">
                <button className="item__primButton">New Invoice</button>
                <input className="item__input" placeholder="Search Invoices"></input>
            </div>

        </div>
    );
};

export default HeaderMain;