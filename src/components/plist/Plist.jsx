import "./plist.css";
import '@fortawesome/fontawesome-free/css/all.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Outlet} from 'react-router-dom';
import { globalngorklink } from "../global";
// import { myContext } from "../../pages/login/Login";
// import { useContext } from "react";

export default function Plist() {

    const [Patients, setPatients] = useState([]);
    const [docID, setdocID] = useState('');
    const [PIDs, setPIDs] = useState([]);
    const [CorrPatients, setCorrPatients] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        // loadPatients();
        getPatientsbyDoctorID();
    }, [])
    
    // CorrPatients

    const loadPatients=async()=>{
        axios.defaults.headers.common['ngrok-skip-browser-warning'] = "any value";
        const result = await axios.get(globalngorklink + "/doctors", {headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        // console.log(result);
        setPatients(result.data);
    }

    const getPatientsbyDoctorID=async()=>{

        const details = JSON.parse(localStorage.getItem('userdetails'));
        const username = details.username;

        const Doc = await axios.get(globalngorklink + "/getdoctorid", {params: {username: username}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}})
        setdocID(Doc.data['doctorID']);
        // console.log(Doc)
        
        const Pts = await axios.get(globalngorklink + "/getpatientsbydocid", {params: {docID: Doc.data['doctorID']}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        setPIDs(Pts.data);

        const arrpids = Array.from(Pts.data);
        const res = await axios.get(globalngorklink + "/getpatientfordoc", {params: {patientids: JSON.stringify(arrpids).slice(1,-1)}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        setCorrPatients(res.data);

    }

    function handleClick(params) {
        navigate('patientdetails', { state: { data: Object.entries(params) } });
        // console.log(Object.entries(params));
        localStorage.setItem("currpatdet", JSON.stringify(params));

    }

    return (
        <div className="Plistmaincontainer">

            <div className="listofpatients">

            {/* "onClick={()=>navigate("patientdetails")}" */}
                {
                    CorrPatients.map((Patient) => (
                        <button className="patient" onClick={()=>handleClick(Patient)}>
                            <span className="icon">
                                <i className="fas fa-user"></i>
                            </span>
                            {Patient.name}
                            {/* <div className="Lastseentext">
                                Lastseen
                            </div> */}
                        </button>
                    ))
                }                

            </div>
                
            
        <Outlet/>
        </div>
        
    );
}