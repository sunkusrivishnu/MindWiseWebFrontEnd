import './pagebartasks.css';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';

export default function Pagebartasks() {

    const navigate = useNavigate();
    const pdetails = JSON.parse(localStorage.getItem('currpatdet'));
    const name = pdetails.name;

    
    return(

        <div className='Ptbarmaincontainer'>
            
            <div className='PtPresentUsage1' onClick={()=>navigate('/patientslist')}>
                <span className="PtPre">
                    Patients
                </span>
            </div>  

            <div className='PtPresentUsage2'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='PtPresentUsage3' onClick={()=>navigate(-1)}>
                <span className="PtPre1">
                    {name}
                </span>
            </div>

            <div className='PtPresentUsage4'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='PtPresentUsage5'>
                <span className="PtPre2">
                    Suggest Tasks
                </span>
            </div>


            <div className='Ptdivider'>

            </div>

        </div>
    );

}