import "./sidebarp.css";
import React, { useState, useEffect } from 'react';
import pimage from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';

export default function Sidebardp() {
    return (
        <div className="pbarmaincontainer">

            <div classname="PMindWiseLogo">
                <img className="PImage" src={pimage} alt="Mindwise"/>
            </div>

            <div className="PDividingLine">
                <div className="pline1"></div>
            </div>

            <div className="PRequiredButtons">
                <button className="pb1">
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                    Dashboard
                </button>
                <button className="pb2">
                    <span className="icon">
                        <i className="fas fa-users"></i>
                    </span>
                    Patients
                </button>
                <buttons className="pb3">
                    <span className="icon">
                        <i className="fas fa-bell"></i>
                    </span>
                    Notifications
                </buttons>
                <button className="pb4">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    Profile 
                </button>
                <button className="pb5">
                    <span className="icon">
                        <i className="fas fa-sign-out"></i>
                    </span>
                    Logout
                </button>
                

            </div>

            <div className="PDividingLine2">
                <div className="pline2"></div>
            </div>

            <div className="LogoutButton">

            </div>

            <div className="PDividingLine3">
                <div className="pline3"></div>
            </div>

        </div>
    );
}