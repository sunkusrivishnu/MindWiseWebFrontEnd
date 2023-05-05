import { useEffect, useState } from 'react';
import './tlist.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { globalngorklink } from '../global';

export default function Tlist() {

    const [Taskslist, setTaskslist] = useState([]);
    const navigate = useNavigate();
    const [Allocatedtasks, setAllocationtasks] = useState([]);
    const pdetails = JSON.parse(localStorage.getItem("currpatdet"));
    const pid = pdetails.patientID;

    useEffect(()=>{
        getAlltasks();
        getListofAllocTasks();
    }, [Taskslist, Allocatedtasks])

    // Taskslist, Allocatedtasks

    const getAlltasks=async()=>{
        // const alltasks = await axios.get("http://localhost:8080/exercises");
        const alltasks = await axios.get(globalngorklink + "/exercises", {headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        setTaskslist(alltasks.data);
    }

    const getListofAllocTasks=async()=>{
        // const resalloc = await axios.get("http://localhost:8080/getexerciseidfrompatient", {params: {patientid: pdetails.patientID}});
        const resalloc = await axios.get(globalngorklink + "/getexerciseidfrompatient", {params: {patientid: pdetails.patientID}, headers:{'ngrok-skip-browser-warning':'google-chrome', 'Authorization': localStorage.getItem('jwt token')}});
        setAllocationtasks(resalloc.data);
        console.log(resalloc);
    };

    function handleTaskdetails(task) {
        navigate('taskdetails', { state: { data: Object.entries(task) } });
        localStorage.setItem("currpattask", JSON.stringify(task));
    }

    function canRenderButton(task) {
        if (task.defaultflag === 0 && !Allocatedtasks.includes(task.exerciseID)) 
        {
            return 1;
        }

        else if (task.defaultflag === 0 && Allocatedtasks.includes(task.exerciseID))
        { 
            return 2;
        }

        else return 3;
    }

    const handleAssignTask=async(task)=> {
        const resass = await axios.post(globalngorklink + "/patientexercise", {"patientID":pdetails.patientID, "exerciseID":task.exerciseID, "completionstatus":"0"}, {headers:{'Authorization': localStorage.getItem('jwt token')}});
        alert("Task assigned successfully");
    }

    const handleDeAssignTask=async(task)=> {
        const resdeass = await axios.delete(globalngorklink + "/deletemappingexepat", { params: {patientid:pdetails.patientID, exerciseid:task.exerciseID}, headers:{'ngrok-skip-browser-warning':'google-chrome','Authorization': localStorage.getItem('jwt token')}})
        alert("Task deassigned successfully");
    }

    return (

        <div className='Tlistmaincontainer'>

            <div className='listoftasks'>

                {
                    Taskslist.map((task) => (

                        <>
                            <button className="task" onClick={()=>handleTaskdetails(task)}>
                                <span className="icon">
                                    <i className="fas fa-tasks"></i>
                                </span>
                                {task.name}
                            </button>
                            
                            {canRenderButton(task) === 1 && 
                                <button className='allocationbutton' onClick={()=>handleAssignTask(task)}>
                                    Assign
                                </button>
                            }

                            {canRenderButton(task) === 2 && 
                                <button className='deallocationbutton' onClick={()=>handleDeAssignTask(task)}>
                                    Deassign
                                </button>
                            }

                        </>
                    ))
                }

            </div>
        
        </div>
    );
}