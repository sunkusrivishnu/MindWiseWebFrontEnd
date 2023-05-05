import './pdetails.css';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';
import { globalngorklink } from '../global';

export default function Pdetails() {


    const ddetails = JSON.parse(localStorage.getItem('userdetails'));
    const pdetails = JSON.parse(localStorage.getItem('currpatdet'));
    const pid = pdetails.patientID;
    const name = pdetails.name;
    const dob = pdetails.dob;
    const gender = pdetails.gender;
    const status = pdetails.status;
    const docID = ddetails.docterID;
    const [value, setValue] = useState(0);
    const [Notification, setNotification] = useState('');
    const [Summary, setSummary] = useState('');
    const [Numexe, setNumexe] = useState(0);
    const [Numcompleted, setNumcompleted] = useState(0);
    const [Notifis, setNotifis] = useState([]);
    const [currentstatus, setcurrentstatus] = useState('');
    const navigate = useNavigate();

    // if (status === 1) {
    //     setcurrentstatus("");
    // }

    // else if (status === 2) {
    //     setcurrentstatus("");
    // }

    // else if (status === 3) {
    //     setcurrentstatus("");
    // }

    // else if (status === 4) {
    //     setcurrentstatus("");
    // }

    // else if (status === 5) {
    //     setcurrentstatus("");
    // }

    
    useEffect(()=>{
        getSummary();
        getNumexe();
        getNumcompl();
        getnotificationsbypid();
    }, [Notifis])

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleInputChangeNotificationtext = (event) => {
        setNotification(event.target.value);
    }

    const getSummary=async()=> {
        // const result = await axios.get("http://localhost:8080/getsummary", {params: {patientID: pid}});
        const result = await axios.get(globalngorklink + "/getsummary", {params: {patientID: pid}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        setSummary(result.data['summary']);
    }

    const getNumexe=async()=> {
        // const num = await axios.get("http://localhost:8080/getcountbypid", {params: {patientID: pid}})
        const num = await axios.get(globalngorklink + "/getcountbypid", {params: {patientID: pid}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}})
        setNumexe(num.data);
    }

    const getNumcompl=async()=> {
        const numcd = await axios.get(globalngorklink + "/getcountpidandcs", {params: {patientID: pid, completionstatus:"1"}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}})
        setNumcompleted(numcd.data);
    }

    const postnotifiaction=async()=> {
        // const currentDate = new Date();
        const currentDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

        // Convert the date and time to a Java Timestamp
        const javaTimestamp = new Date(currentDate).getTime();

        // Format the Java Timestamp to the desired format
        const formattedTimestamp = new Date(javaTimestamp).toISOString().replace("Z", "");

        const notifi = await axios.post(globalngorklink + "/notification", {"patientID":pid, "doctorID":ddetails.doctorID, "description":Notification, "timestamp":formattedTimestamp}, { headers:{'Authorization': localStorage.getItem('jwt token')}});
        setNotification('');
        alert("Notification sent successfully");
    }

    const getnotificationsbypid=async()=> {
        const notis = await axios.get(globalngorklink + "/getnotificationsbypatientidanddocid", {params: {patientID: pid, doctorID:ddetails.doctorID}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        setNotifis(notis.data);
    }

    const getstatusbypid=async()=> {
        const restat = await axios.get(globalngorklink + "/getstatusbypid", {params: {username: pdetails.username}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}})
        setcurrentstatus(restat.data);
    }


    function gotondetailspage(Noti) {
        navigate('notificationdetails');
        localStorage.setItem("currnotifi", JSON.stringify(Noti));
    }


    function gotochatpage(ptc) {
        navigate('chat');
        localStorage.setItem("currpatchat", JSON.stringify(ptc));
    }

    return(

        <div className='Pdetailsmaincontainer'>

            <div className='PatDetails'>

                <div className='PatientName'>
                    <span className='Patientname'>
                        Name : 
                    </span>
                    <span className='patientname'>
                        {name}
                    </span>
                </div>

                <div className='Yearofbirth'>

                    <span className='PYear'>
                        Year : 
                    </span>
                    <span className='pyear'>
                        {dob.slice(0,4)}
                    </span>

                </div>

                <div className='Gender'>
                    
                    <span className='PGender'>
                        Gender : 
                    </span>
                    <span className='pgender'>
                        {gender}
                    </span>
                    
                </div>

                <div className='Status'>

                    <span className='PStatus'>
                        Status : 
                    </span>
                    {/* <span className='pstatus'>
                        {status}
                    </span> */}

                    {status == 1 &&  <span className='pstatus'> 😠 </span>}
                    {status == 2 &&  <span className='pstatus'> 🙁 </span>}
                    {status == 3 &&  <span className='pstatus'> 😐 </span>}
                    {status == 4 &&  <span className='pstatus'> 🙂 </span>}
                    {status == 5 &&  <span className='pstatus'> 😄 </span>}
                    
                
                </div>

                {/* <div className='Summary'>
                    
                    <span className='PSummary'>
                        Summary :  
                    </span>
                    <span className='psummary'>
                        {Summary}
                    </span>
                

                </div> */}

                <div className='Progessbar'>

                    <span className='PProgress'>
                        Progess :  
                    </span>

                    <progress className='Pprogressbar' value={Numcompleted} max={Numexe} />

                    <span className='numberoftasksdone'>
                        {Numcompleted}/{Numexe}
                    </span>

                </div>

                <div className='Suggesttaskbutton'>

                    {/* onClick={()=>navigate('/dashboard')} */}
                    <button className="stbutton" onClick={()=>navigate('suggesttask')}>
                        <span className="icon">
                            <i className="fas fa-tasks"></i>
                        </span>
                        Suggest task
                    </button>

                </div>

                <div className='PDChatbutton'>

                    <button className="chatbutton" onClick={()=>navigate('chat')}>
                        <span className="icon">
                            <i className="fas fa-comment"></i>
                        </span>
                        Chat
                    </button>

                </div>

            </div>

            <div className='PatientNotifications'>

                <div className='boxfornotifiheading'>

                </div>

                <div className='Notifitextheading'>
                    <span className='notifitextheading'>
                        Notifications sent till date
                    </span>
                </div>

                <div className='listofnotificationssentbydoctor'>

                    {/* <button className="displaynbutton" >
                        Hello, this is my second notification from front end page.Hope this works!
                    </button> */}
                    {
                        Notifis.map((Noti) => (
                            <button className="displaynbutton" onClick={()=>gotondetailspage(Noti)}>
                                {Noti.description}
                            </button>
                        ))
                    }           
                </div>


            </div>

            <div className='CustomisedNotifications'>

                <div className='boxforcntext'>

                </div>

                <div className='csntext'>
                    <span className='Csntext'>
                        Send a notification
                    </span>
                </div>

                <div className='customisedtext'> 
                    <textarea
                        placeholder='Notification text' 
                        className='rounded-textareainput' 
                        style={{ resize: "none", backgroundColor:'#16202A', color: '#FFFDD0', fontSize: "15px"}} 
                        rows={10} 
                        cols={31} 
                        value={Notification} 
                        onChange={handleInputChangeNotificationtext} 

                    />
                </div>

                <div className='PDSendNbutton'>

                    <button className="sendnbutton" onClick={postnotifiaction}>
                        <span className="icon">
                            <i className="fas fa-message"></i>
                        </span>
                        Send
                    </button>

                </div>

            </div>
            
            <Outlet/>
        </div>
    );

}