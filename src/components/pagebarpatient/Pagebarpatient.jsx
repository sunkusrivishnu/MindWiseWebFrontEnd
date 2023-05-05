import './pagebarpatient.css';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';

export default function Pagebarpatient() {

    const navigate = useNavigate();
    const pdetails = JSON.parse(localStorage.getItem('currpatdet'));
    const name = pdetails.name;

    return(
        <div className='Pdetbarmaincontainer'>

            <div className='PdetPresentUsage1' onClick={()=>navigate('/patientslist')}>
                <span className='PdetPre'>
                    Patients
                </span>
            </div>


            <div className='PdetPresentUsage2'>

                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>

            </div>

            <div className='PdetPresentUsage3'>
                <span className="PdetPre1">
                    {name}
                </span>
            </div>

            <div className='Pdetdivider'>

            </div>

        </div>
    );

}