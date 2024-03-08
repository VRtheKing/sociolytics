import React from "react";
import { ReactDOM } from "react";
import logo from './images/logo.svg'
import dashboard from './images/dashboard.svg'
import stats from './images/Pressure.svg'
import subscription from './images/Chat_plus.svg'
import settings from './images/Setting_line.svg'
import signout from './images/Sign_out_squre.svg'

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="logo">
                <a href="/home">
                <img src={logo} alt="" height={"60px"} />
                </a>
            </div>
            <div className="line"></div>
            <div className="nav">
                <div className="group">
                    <img src={dashboard} alt="Alt Text" />
                    <a href="/home">Home</a>
                </div>
                <div className="group">
                    <img src={stats} alt="Alt Text" />
                    <a href="/stats">Stats</a>
                </div>
                <div className="group">
                    <img src={subscription} alt="Alt Text" />
                    <a href="/subscription">Subscription</a>
                </div>
                <div className="group">
                    <img src={settings} alt="Alt Text" />
                    <a href="/settings">Settings</a>
                </div>
                <div className="group">
                    <img src={signout} alt="Alt Text" />
                    <a href="/signout">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;