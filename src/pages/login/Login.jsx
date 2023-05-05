import "./login.css";
import React, { useState } from 'react'
import limage from "../login/Mindwiselogo-1.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../components/auth";
import { useEffect } from "react";
import { globalngorklink } from "../../components/global";
// import bcrypt from 'bcryptjs';
// import { createContext } from "react";

// export const myContext = createContext();

export default function Login() {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const auth = useAuth();
    const [passwordType, setPasswordType] = useState("password");
    // const salt = bcrypt.genSaltSync(0);
    // const hash = bcrypt.hashSync(Password, salt);


    const handleInputChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleInputChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const togglePassword = () => {

        if(passwordType==="password")
        {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    // useEffect(()=>{
    //     getDoctorDetails();
    // }, [])

    const handleLogin = async() => {
        axios.post(globalngorklink + '/validate', {"username":Username, "role":"doctor", "password" : Password})
        .then((response) => {
            console.log(response.data)
            if(response.data)
            {
                axios.post(globalngorklink + "/signin", {"username":Username, "password": Password}
                ).then((response1) => {
                    localStorage.setItem("jwt token", response1.data["token"]);

                })
                
                auth.login(Username);
                navigate('dashboard');
                const getDoctorDetails=async()=>{
                    const userdetails = await axios.get(globalngorklink + "/getdoctorid", 
                                        {
                                            params: {username: Username}, 
                                            headers:{ 
                                                'Authorization': localStorage.getItem('jwt token'), 
                                                'ngrok-skip-browser-warning':'google-chrome'
                                            } 
                                        });
                    localStorage.setItem("userdetails", JSON.stringify(userdetails.data));
                }
                getDoctorDetails();
            }
            else
            {
                alert('Username/Password Incorrect');
            }
            }).catch((error) => {
            alert('Error', error.message);
            console.log(error.message)
            });

    }


    const navigate = useNavigate();

    return (

        <div className="Loginmaincontainer">
            <div className="Square1">

            </div>

            <div className="Square2">

            </div>

            <div className="LoginMindwiseLogo">
                <img className="LImage" src={limage} alt="Mindwise"/>
            </div>

            <div className="LoginAppName">
                <span className="LLogo">
                    MindWise
                </span>
            </div>

            <div className="Input1">

                <input 
                    type="text"
                    value={Username}
                    onChange={handleInputChangeUsername}
                    placeholder="Username"  
                    className="Rounded-input1"
                />

            </div>

            <div className="Input2">

                <input 
                    type={passwordType}
                    value={Password}
                    onChange={handleInputChangePassword}
                    placeholder="Password"  
                    className="Rounded-input2"
                />

                <button className='PVisibility' onClick={togglePassword}>
                    {   passwordType==="password"? 
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        :<i class="fa-solid fa-eye-slash"></i> 
                    }
                </button>

            </div>
            
            <div className="LoginButton">

                <button className="loginbutton" onClick={handleLogin}>
                    Login
                </button>

            </div>
        </div>
    );
}