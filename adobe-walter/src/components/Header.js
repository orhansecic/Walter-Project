import React from 'react';
import {Link} from 'react-router-dom';

//Icons
import { FaRegBell } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';

import logo from '../images/logo.png';

const Header = () =>{
    return(
        <div className="nav">
            <div className="item item--left">
                <Link to="/" className="item__element"><img src={logo} alt="walter-logo" /></Link>
                <Link to="/" className="item__element item__element--active">Requests</Link>
                <Link to="/" className="item__element">Collaborators</Link>
            </div>
            <div className="item item--right">
                <span className="item__element item__element--bell"><FaRegBell size="20" /></span>
                <AiOutlineUser size="20" className="item__element--icon"/>
                <span className="item__element">Admin Name</span>
                <RiArrowDropDownLine size="20" className="item__element"/>
            </div>
        </div>
    );
};

export default Header;