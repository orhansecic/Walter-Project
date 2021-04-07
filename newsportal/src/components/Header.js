import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return (
        <div className="ui secondary pointing menu">
            <Link className="item" to="/">O-News</Link>
            <div className="right menu">
                <Link className="item" to="/">Top Headlines</Link>
                <Link className="item" to="/search">Search</Link>
            </div>
            
        </div>
    );
};

export default Header;

