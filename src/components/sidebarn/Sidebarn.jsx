import "./sidebarn.css";
import React, { useState, useEffect } from 'react';
import nimage from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';
import {useNavigate} from 'react-router-dom';
import { useAuth } from "../auth";

export default function Sidebarn() {

    const navigate = useNavigate();
    const auth = useAuth();

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <div className="Nbarmaincontainer">

            <div classname="NMindWiseLogo" onClick={()=>navigate('/dashboard')}>
                <img className="NImage" src={nimage} alt="Mindwise"/>
            </div>

            <div className="NDividingLine">
                <div className="nline1"></div>
            </div>

            <div className="NRequiredButtons">
                <button className="nb1" onClick={()=>navigate('/dashboard')}>
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                    Dashboard
                </button>
                <button className="nb2" onClick={()=>navigate('/patientslist')}>
                    <span className="icon">
                        <i className="fas fa-hospital-user"></i>
                    </span>
                    Patients
                </button>
                <buttons className="nb3" onClick={()=>navigate('/patientslogs')}>
                    <span className="icon">
                        <i className="fas fa-bell"></i>
                    </span>
                    Patients' logs
                </buttons>
                <button className="nb4" onClick={()=>navigate('/profile')}>
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    Profile 
                </button>
                <button className="nb5" onClick={handleLogout}>
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