import "./pagebartaskdetails.css";
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';

export default function Pagebartaskdetails() {
    
    const navigate = useNavigate();
    const pdetails = JSON.parse(localStorage.getItem('currpatdet'));
    const name = pdetails.name;    
    
    return (
        <div className='Tdetbarmaincontainer'>
            
            <div className='TdetPresentUsage1' onClick={()=>navigate('/patientslist')}>
                <span className="TdetPre">
                    Patients
                </span>
            </div>  

            <div className='TdetPresentUsage2'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='TdetPresentUsage3' onClick={()=>navigate(-2)}>
                <span className="TdetPre1">
                    {name}
                </span>
            </div>

            <div className='TdetPresentUsage4'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='TdetPresentUsage5' onClick={()=>navigate(-1)}>
                <span className="TdetPre2">
                    Suggest Tasks
                </span>
            </div>

            <div className='TdetPresentUsage6'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='TdetPresentUsage7'>
                <span className="TdetPre3">
                    Task details
                </span>
            </div>


            <div className='Tdetdivider'>

            </div>

        </div>
    );
}