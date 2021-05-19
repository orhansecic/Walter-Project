import React from 'react';
import {Link} from 'react-router-dom';

//Icons
import { FaRegBell } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';

import logo from '../images/logo.png';

const Header = () =>{
    return(
        <div>
            <div className="nav">
            <div className="item item--left">
                <Link to="/" className="item__element element--logo"><img src={logo} alt="walter-logo" /></Link>
                <Link to="/" data-testid="Example" className="item__element item__element--active element--requests">Requests</Link>
                <Link to="/" className="item__element element--collaborators">Collaborators</Link>
            </div>
            <div className="item item--right">
                <span className="item__element item__element--bell"><FaRegBell size="20" /></span>
                <AiOutlineUser size="20" className="item__element--icon"/>
                <span className="item__element">Admin Name</span>
                <RiArrowDropDownLine size="20" className="item__element"/>
            </div>
            </div>

            <div className="nav-mobile">
                <Link to="/" className="item__element element--logo"><img src={logo} alt="walter-logo" /></Link>
                <Link to="/" className="item__element item__element--active element--requests">Requests</Link>
                <Link to="/" className="item__element element--collaborators">Collaborators</Link>
                <span className="item__element item__element--bell element--bell"><FaRegBell size="20" /></span>
                <span className="item__element element--admin">Admin Name</span>
            </div>
        </div>
    );
};

export default Header;