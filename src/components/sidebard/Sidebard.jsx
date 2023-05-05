import "./sidebard.css";
import React, { useState, useEffect } from 'react';
import dimage from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate} from 'react-router-dom';
import { useAuth } from "../../components/auth";

export default function Sidebard() {

    const navigate = useNavigate();
    const auth = useAuth();

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    
    return (
        <div className="Dbarmaincontainer">

            <div classname="DMindWiseLogo" onClick={()=>navigate('/dashboard')}>
                <img className="DImage" src={dimage} alt="Mindwise"/>
            </div>

            <div className="DDividingLine">
                <div className="dline1"></div>
            </div>

            <div className="DRequiredButtons">
                <button className="db1" onClick={()=>navigate('/dashboard')}>
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                    Dashboard
                </button>
                <button className="db2" onClick={()=>navigate('/patientslist')}>
                    <span className="icon">
                        <i className="fas fa-hospital-user"></i>
                    </span>
                    Patients
                </button>
                <buttons className="db3" onClick={()=>navigate('/patientslogs')}>
                    <span className="icon">
                        <i className="fas fa-bell"></i>
                    </span>
                    Patients' logs
                </buttons>
                <button className="db4" onClick={()=>navigate('/profile')}>
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    Profile 
                </button>
                <button className="db5" onClick={handleLogout}>
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