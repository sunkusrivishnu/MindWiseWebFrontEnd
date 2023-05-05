import "./ddetails.css";
import { useState, useEffect } from "react";
import { globalngorklink } from "../global";
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales
  );

export default function Ddetails() {

    const [CorrPatients, setCorrPatients] = useState([]);
    const [docID, setdocID] = useState('');
    const [PIDs, setPIDs] = useState([]);
    
    useEffect(()=>{
        getPatientsbyDoctorID();
    }, [CorrPatients])

    // CorrPatients

    const getPatientsbyDoctorID=async()=>{

        const details = JSON.parse(localStorage.getItem('userdetails'));
        const username = details.username;

        const Doc = await axios.get(globalngorklink + "/getdoctorid", {params: {username: username}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization':localStorage.getItem("jwt token")}})
        setdocID(Doc.data['doctorID']);
        console.log(Doc)
        
        const Pts = await axios.get(globalngorklink + "/getpatientsbydocid", {params: {docID: Doc.data['doctorID']}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        setPIDs(Pts.data);

        const arrpids = Array.from(Pts.data);
        const res = await axios.get(globalngorklink + "/getpatientfordoc", {params: {patientids: JSON.stringify(arrpids).slice(1,-1)}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        setCorrPatients(res.data);
        
    }

    const countsByCategory = CorrPatients.reduce((acc, curr) => {
        const category = curr.status;
        acc[category]++;
        return acc;
      }, {1:0, 2:0, 3:0, 4:0, 5:0});


    const labels = ["😠", "🙁", "😐", "🙂", "😄"];

    const data = 
    {
        labels,
        datasets: [
            {
            label: "Number of users by their mood",
            data: Object.values(countsByCategory),
            backgroundColor: "#2EEE9D",
            borderColor:"#FFFDD0",
            borderWidth: 1,
            color:"white"
            }
        ]
    };

    const options = 
    {
        responsive: true,
        plugins: {
            legend: {
                position: "top"  
            },
            title: {
                display: true,
                text: "Mood graph",
                color: 'white' 
            }
        }, 
        scales: {
            y: {
        
                border: {
                    color: "#FFFDD0"
                },
        
                grid: {
                    display: false,
                    color: "#FFFDD0"
                },
        
                ticks: {
                    color: '#FFFDD0'
                }
            }
            ,
            x: {
        
                border: {
                    color: "#FFFDD0"
                },
        
                grid: {
                    display: false
                },
                
                
            }
          }
    };
        

    return(

        <div className="Ddetailsmaincontainer">
            
            <div className="Verticalbarchart">

                <Bar data={data} options={options} />

            </div>

        </div>

    );

}