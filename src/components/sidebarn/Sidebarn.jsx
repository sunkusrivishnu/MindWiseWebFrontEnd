import "./sidebarn.css";
import React, { useState, useEffect } from 'react';
import nimage from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Sidebarn() {
    return (
        <div className="Nbarmaincontainer">

            <div classname="NMindWiseLogo">
                <img className="NImage" src={nimage} alt="Mindwise"/>
            </div>

            <div className="NDividingLine">
                <div className="nline1"></div>
            </div>

            <div className="NRequiredButtons">
                <button className="nb1">
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                    Dashboard
                </button>
                <button className="nb2">
                    <span className="icon">
                        <i className="fas fa-users"></i>
                    </span>
                    Patients
                </button>
                <buttons className="nb3">
                    <span className="icon">
                        <i className="fas fa-bell"></i>
                    </span>
                    Notifications
                </buttons>
                <button className="nb4">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    Profile 
                </button>
                <button className="nb5">
                    <span className="icon">
                        <i className="fas fa-sign-out"></i>
                    </span>
                    Logout
                </button>
                

            </div>

            <div className="NDividingLine2">
                <div className="nline2"></div>
            </div>

            <div className="LogoutButton">

            </div>

            <div className="NDividingLine3">
                <div className="nline3"></div>
            </div>

        </div>

    );
}