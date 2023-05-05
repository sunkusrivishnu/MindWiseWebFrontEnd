import './pagebarnotifidetails.css';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';

export default function Pagebarnotifidetails() {

    const navigate = useNavigate();
    const pdetails = JSON.parse(localStorage.getItem('currpatdet'));
    const name = pdetails.name;
    
    return(

        <div className='Ndetbarmaincontainer'>
            
            <div className='NdetPresentUsage1' onClick={()=>navigate('/patientslist')}>
                <span className="NdetPre">
                    Patients
                </span>
            </div>  

            <div className='NdetPresentUsage2'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='NdetPresentUsage3' onClick={()=>navigate(-1)}>
                <span className="NdetPre1">
                    {name}
                </span>
            </div>

            <div className='NdetPresentUsage4'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='NdetPresentUsage5'>
                <span className="NdetPre2">
                    Notification details
                </span>
            </div>


            <div className='Ndetdivider'>

            </div>

        </div>
    );

}