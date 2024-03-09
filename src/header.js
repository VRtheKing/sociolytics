import React from "react";
import { ReactDOM } from "react-dom";
import logo from './images/logon.svg'
import './styles/header.css'

function Header(){
    return(
        <div className="header">
            <div className="logo1">
            <img src={logo} alt="App Name"/>
            </div>
            <div className="nav1">
                <a href="/home">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/aboutus">About Us</a>
                <a href="/contact">Contact Us</a>
            </div>
        </div>
    )
}

export default Header;