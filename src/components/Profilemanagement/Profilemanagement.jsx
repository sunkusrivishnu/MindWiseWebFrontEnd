import './profilemanagement.css'
import React, { useState } from 'react'
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import { globalngorklink } from '../global';


export default function Profilemanagement() {

    const [CurrPassword, setCurrPassword] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    const [ConfirmNewPassword, setConfirmNewPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [CpasswordType, setCPasswordType] = useState("password");
    const [NpasswordType, setNPasswordType] = useState("password");
    const [CNpasswordType, setCNPasswordType] = useState("password");

    const handleInputChangeCurrPassword = (event) => {
        setCurrPassword(event.target.value);
    }

    const handleInputChangeNewPassword = (event) => {
        setNewPassword(event.target.value);
    }

    const handleInputChangeConfirmNewPassword = (event) => {
        setConfirmNewPassword(event.target.value);
    }

    const CtogglePassword = () => {

        if(CpasswordType==="password")
        {
         setCPasswordType("text")
         return;
        }
        setCPasswordType("password")
    }

    const NtogglePassword = () => {

        if(NpasswordType==="password")
        {
         setNPasswordType("text")
         return;
        }
        setNPasswordType("password")
    }

    const CNtogglePassword = () => {

        if(CNpasswordType==="password")
        {
         setCNPasswordType("text")
         return;
        }
        setCNPasswordType("password")
    }
 
    const updatepassword = (event) => {
        event.preventDefault();

        if (NewPassword === null){
            alert('give some values')
        }

        if(NewPassword === ConfirmNewPassword) {
            setPasswordsMatch(true);
            // Axios API request.
            axios.post(globalngorklink + "/updatePassword", {"username":username, "role":"doctor", "oldpassword" : CurrPassword, "newpassword" : NewPassword}
            , {headers:{'Authorization': localStorage.getItem('jwt token')}}).then((response) => {
                if(response.data)
                {
                    alert('Success', 'Password Update Change');
                }
            
                else
                {
                    alert('Failed', 'Password Update Failed');
                }
            }).catch((error) => {
                alert('Error', error.message);
                console.log(error.message)
            }); 
        }

        else {
            setPasswordsMatch(false);
            alert("Two fields don't match. Please give same values in the above two fields.");
        }
    }

    const details = JSON.parse(localStorage.getItem('userdetails'));
    const username = details.username;
    const name = details.name;

    return (
        <div className='PManageMaincontainer'>
            <div className='namecontainer'>
                <span className='Name'>
                    Name: 
                </span>
                <span className='name'>
                    {name}
                </span>
            </div>

            <div className='Updatepassword'>
                <span className='updatepassword'>
                    Update password
                </span>
            </div>

            <div className='Currentpassword'>

                <input 
                    type={CpasswordType}
                    value={CurrPassword}
                    onChange={handleInputChangeCurrPassword}
                    placeholder="Current password"  
                    className="Rounded-inputcp"
                />

                <button className='CVisibility' onClick={CtogglePassword}>
                    {   CpasswordType==="password"? 
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        :<i class="fa-solid fa-eye-slash"></i> 
                    }
                </button>

            </div>

            <div className='Newpassword'>

                <input 
                    type={NpasswordType}
                    value={NewPassword}
                    onChange={handleInputChangeNewPassword}
                    placeholder="New password"  
                    className="Rounded-inputnp"
                />

                <button className='NVisibility' onClick={NtogglePassword}>
                    {   NpasswordType==="password"? 
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        :<i class="fa-solid fa-eye-slash"></i> 
                    }
                </button>

            </div>

            <div className='Confirmnewpassword'>

                <input 
                    type={CNpasswordType}
                    value={ConfirmNewPassword}
                    onChange={handleInputChangeConfirmNewPassword}
                    placeholder="Confirm new password"  
                    className="Rounded-inputcnp"
                />

                <button className='CNVisibility' onClick={CNtogglePassword}>
                    {   CNpasswordType==="password"? 
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        :<i class="fa-solid fa-eye-slash"></i> 
                    }
                </button>

            </div>

            <div className='Confirmbutton' onClick={updatepassword}>

                <button className="Changepassword">
                    Change password
                </button>

            </div>
            
            {/* <div className='Deleteaccountbutton'>
                <button className='deleteaccount'>
                    Delete account
                </button>
            </div> */}

        </div>
    );
} 