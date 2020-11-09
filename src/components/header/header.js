import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
import Logo from '../../images/logo.png'
 
const Header = () => (
    <header id="main-header">
        <div className="navbar">
            <h1><img className="logo" src={Logo}/></h1>
            <button className="button">
                {/* <Link to='/produtos'>LOGIN</Link> */}
            </button>
        </div>
    </header>
    
);
 
export default Header;