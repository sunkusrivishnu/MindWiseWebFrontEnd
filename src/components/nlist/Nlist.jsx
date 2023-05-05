import './nlist.css';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { globalngorklink } from '../global';
import { useNavigate } from 'react-router-dom';

export default function Nlist() {

    const [Notifications, setNotifications] = useState([]);
    const ddetails = JSON.parse(localStorage.getItem("userdetails"));
    const navigate = useNavigate();

    useEffect(()=>{
        loadNotifications();
    }, [])
    
    const loadNotifications=async()=>{
        // const result = await axios.get("http://localhost:8080/notifications");
        const result = await axios.get(globalngorklink + "/getlogsbydocid", {params: {doctorID: ddetails.doctorID}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        setNotifications(result.data);
    }

    function handleLogClick(params) {
        navigate('logdetails', { state: { data: Object.entries(params) } });
        // console.log(Object.entries(params));
        localStorage.setItem("currlogdet", JSON.stringify(params));

    }



    return (

        <div className="Nlistmaincontainer">

            <div className="listofnotifications">


                {
                    Notifications.map((Notification) => (
                        <button className={"notification"} onClick={()=>handleLogClick(Notification)}>
                            <span className="icon">
                                <i className="fas fa-user"></i>
                            </span>
                            {Notification.description}
                        </button>
                    ))
                }                

            </div>

        </div>
    );
}