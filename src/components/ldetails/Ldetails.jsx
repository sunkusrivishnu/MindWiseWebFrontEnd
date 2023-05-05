import { useEffect, useState } from "react";
import "./ldetails.css";
import axios from "axios";
import { globalngorklink } from "../global";

export default function Ldetails() {

    const ldetails = JSON.parse(localStorage.getItem('currlogdet'));
    const description = ldetails.description;
    const timestamp = ldetails.timestamp;
    const [name, setName] = useState('');

    useEffect(()=> {
        getpatientdetbypatid();
    },[])

    const getpatientdetbypatid=async()=>{
        const response = await axios.get(globalngorklink + "/getdetailsbypatid", {params:{patientID:ldetails.patientID}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}}); 
        setName(response.data['name']);
    };

    return (

        <div className="Ldetailsmaincontainer">

                <div className='LdetPatientName'>
                    <span className='LdetName'>
                        Name : 
                    </span>
                    <span className='Ldetname'>
                        {name}
                    </span>
                </div>

                <div className='Ldetdescription1'>
                    <span className='Ldescription'>
                        Description : 
                    </span>
                    <span className='ldescription'>
                        {description}
                    </span>
                </div>

                <div className='LdetTimeStamp'>
                    <span className='LTimestamp'>
                        Timestamp : 
                    </span>
                    <span className='ltimestamp'>
                        {timestamp.slice(0, 10) + ", " + timestamp.slice(11, 19)}
                    </span>
                </div>


        </div>

    );

}