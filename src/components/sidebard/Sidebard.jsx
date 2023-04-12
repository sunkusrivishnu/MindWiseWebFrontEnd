import "./sidebard.css";
import React, { useState, useEffect } from 'react';
import dimage from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Sidebard() {
    return (
        <div className="Dbarmaincontainer">

            <div classname="DMindWiseLogo">
                <img className="DImage" src={dimage} alt="Mindwise"/>
            </div>

            <div className="DDividingLine">
                <div className="dline1"></div>
            </div>

            <div className="DRequiredButtons">
                <button className="db1">
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                    Dashboard
                </button>
                <button className="db2">
                    <span className="icon">
                        <i className="fas fa-users"></i>
                    </span>
                    Patients
                </button>
                <buttons className="db3">
                    <span className="icon">
                        <i className="fas fa-bell"></i>
                    </span>
                    Notifications
                </buttons>
                <button className="db4">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    Profile 
                </button>
                <button className="db5">
                    <span className="icon">
                        <i className="fas fa-sign-out"></i>
                    </span>
                    Logout
                </button>
                

            </div>

            <div className="DDividingLine2">
                <div className="dline2"></div>
            </div>

            <div className="LogoutButton">

            </div>

            <div className="DDividingLine3">
                <div className="dline3"></div>
            </div>

        </div>
    );
}