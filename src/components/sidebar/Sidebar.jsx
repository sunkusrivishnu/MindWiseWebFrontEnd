import "./sidebar.css";
import React, { useState, useEffect } from 'react';
import image from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Sidebar() {
    return (
        <div className="Sbarmaincontainer">

            <div classname="MindWiseLogo">
                <img className="Image" src={image} alt="Mindwise"/>
            </div>

            <div className="DividingLine">
                <div className="line1"></div>
            </div>

            <div className="RequiredButtons">
                <button className="b1">
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                    Dashboard
                </button>
                <button className="b2">
                    <span className="icon">
                        <i className="fas fa-users"></i>
                    </span>
                    Patients
                </button>
                <buttons className="b3">
                    <span className="icon">
                        <i className="fas fa-bell"></i>
                    </span>
                    Notifications
                </buttons>
                <button className="b4">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    Profile 
                </button>
                <button className="b5">
                    <span className="icon">
                        <i className="fas fa-sign-out"></i>
                    </span>
                    Logout
                </button>
                

            </div>

            <div className="DividingLine2">
                <div className="line2"></div>
            </div>

            <div className="LogoutButton">

            </div>

            <div className="DividingLine3">
                <div className="line3"></div>
            </div>

        </div>
    );
}