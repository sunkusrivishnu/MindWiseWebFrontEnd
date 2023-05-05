import './pagebarchat.css';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';

export default function Pagebarchat() {

    const navigate = useNavigate();
    const pdetails = JSON.parse(localStorage.getItem('currpatdet'));
    const name = pdetails.name;

    
    return(

        <div className='Pbarchatmaincontainer'>
            
            <div className='PchatPresentUsage1'onClick={()=>navigate(-2)}>
                <span className="PchatPre">
                    Patients
                </span>
            </div>  

            <div className='PchatPresentUsage2'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='PchatPresentUsage3'onClick={()=>navigate(-1)}>
                <span className="PchatPre1">
                    {name}
                </span>
            </div>

            <div className='PchatPresentUsage4'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='PchatPresentUsage5'>
                <span className="PchatPre2">
                    Chat
                </span>
            </div>


            <div className='Pchatdivider'>

            </div>

        </div>
    );

}