import React from 'react';
import logo from '../main/logo.png';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="App-header">
            <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            </Link>
        </div>
    );
}

export default Header;