import "./sidebarp.css";
import React, { useState, useEffect } from 'react';
import pimage from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate} from 'react-router-dom';
import { useAuth } from "../auth";

export default function Sidebardp() {

    const navigate = useNavigate();
    const auth = useAuth();

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <div className="pbarmaincontainer">

            <div classname="PMindWiseLogo" onClick={()=>navigate('/dashboard')}>
                <img className="PImage" src={pimage} alt="Mindwise"/>
            </div>

            <div className="PDividingLine">
                <div className="pline1"></div>
            </div>

            <div className="PRequiredButtons">
                <button className="pb1" onClick={()=>navigate('/dashboard')}>
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                    Dashboard
                </button>
                <button className="pb2" onClick={()=>navigate('/patientslist')}>
                    <span className="icon">
                        <i className="fas fa-hospital-user"></i>
                    </span>
                    Patients
                </button>
                <buttons className="pb3" onClick={()=>navigate('/patientslogs')}>
                    <span className="icon">
                        <i className="fas fa-bell"></i>
                    </span>
                    Patients' logs
                </buttons>
                <button className="pb4" onClick={()=>navigate('/profile')}>
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    Profile 
                </button>
                <button className="pb5" onClick={handleLogout}>
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