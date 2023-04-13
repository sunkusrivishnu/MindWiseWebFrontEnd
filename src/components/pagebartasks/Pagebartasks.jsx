import './pagebartasks.css';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Pagebartasks() {
    
    return(

        <div className='Ptbarmaincontainer'>
            
            <div className='PtPresentUsage1'>
                <span className="PtPre">
                    Patients
                </span>
            </div>  

            <div className='PtPresentUsage2'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='PtPresentUsage3'>
                <span className="PtPre1">
                    Patient-A
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