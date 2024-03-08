import React from "react";
import { ReactDOM } from "react-dom";
import logo from './images/logon.svg'

function Header(){
    return(
        <div className="header">
            <div className="logo">
            <img src={logo} alt="App Name"/>
            </div>
            <div className="nav">
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/aboutus">About Us</a>
                <a href="/contact">Contact Us</a>
            </div>
        </div>
    )
}

export default Header;