import './cdetails.css';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { globalngorklink } from '../global';
import { isEditable } from '@testing-library/user-event/dist/utils';

export default function Cdetails() {
    const [Message, setMessage] = useState('');
    const [Lmessages, setLmessages] = useState([]);
    const pcdetails = JSON.parse(localStorage.getItem('currpatdet'));
    const dcdetails = JSON.parse(localStorage.getItem("userdetails"));
    const name = pcdetails.name;
    const navigate = useNavigate();
    const [Notifications, setNotifications] = useState([]);
    const [Chatroomid, setChatroomid] = useState(0);


    const handleInputChangeMessagetext = (event) => {
        setMessage(event.target.value);
    }

    useEffect(()=>{
        // loadNotifications();
        getchatroomidbydocidandpatid();
    }, [Lmessages])

    // Lmessages
    
    const loadNotifications=async()=>{
        // const result = await axios.get("http://localhost:8080/notifications");
        const result = await axios.get(globalngorklink + "/notifications", { headers:{'ngrok-skip-browser-warning':'google-chrome'}});
        setNotifications(result.data);
    }

    const getchatroomidbydocidandpatid=async() => {
        const resid = await axios.post(globalngorklink + "/getidbydocandpatid", {"patientid":pcdetails.patientID, "doctorid":dcdetails.doctorID}, {headers:{'Authorization': localStorage.getItem('jwt token')}});
        setChatroomid(resid.data);
        const resmess = await axios.get(globalngorklink + "/getallmessages", {params:{chatroomid:resid.data}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        setLmessages(resmess.data);
    }

    const sendMessage=async() => {
        console.log("Going in ...");
        await axios.post(globalngorklink + "/addmessage", {"senderid":dcdetails.doctorID, "recipientid":pcdetails.patientID, "content":Message, "readreceipt":false, "chatroomid":Chatroomid}, {headers:{'Authorization': localStorage.getItem('jwt token')}});
        setMessage('');
        // alert("Message sent succesfully !");
    }

    const sendMessage1=async() => {
        console.log("Going in ");
    }

    // console.log(Chatroomid);
    const boxStyle = {
        backgroundColor: "#f0f",
        display: "inline-block",
        position: "relative",
        padding: "10px",
        borderRadius: "10px"
      };
    
      const textStyle = {
        visibility: "hidden",
        position: "absolute",
        top: "0",
        left: "0",
        width: "auto",
        height: "auto",
        whiteSpace: "nowrap",
        fontSize: "16px"
      };

    return (

        <div className="chatmaincontainer">

            <div className='Userinfo'>

                <div className="UserIcon1">
            
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>

                </div>

                <div className="AppName11">

                    <span className="Nameofpat">
                        {name}
                    </span>

                </div>

            </div>

            <button className="b1chat" onClick={()=>navigate(-1)}>
                Exit
            </button>

            <div className='listofmessages'>

                {
                    Lmessages.map((message) => (
                        
                        <>
                            {   

                                message["senderId"]  == dcdetails.doctorID ? <div className="outcontainer">

                                        <div className="chat-bubble-left">
                                            {message.content}
                                        </div>

                                </div> :
                                <div className="chat-bubble-right">
                                    {message.content}
                                </div>

                            }
                        </>


                    ))
                }

            </div>
        
            <div className='customisedtext1'> 
                <textarea
                    placeholder='Type a message...' 
                    className='rounded-textareainput' 
                    style={{ resize: "none", backgroundColor:'#2F4052', color: '#FFFDD0', fontSize: "15px", borderRadius: '25px'}} 
                    rows={1} 
                    cols={94} 
                    value={Message} 
                    onChange={handleInputChangeMessagetext} 

                />

            </div>

            <button className="send" onClick={()=>sendMessage()}>

                <span className="icon">
                    <i className="fas fa-paper-plane"></i>
                </span>

                Send

            </button>



    
        </div>
    );
    
}

