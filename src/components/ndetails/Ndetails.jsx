import axios from 'axios';
import './ndetails.css';
import { globalngorklink } from '../global';

export default function Ndetails() {

    const pdetails = JSON.parse(localStorage.getItem('currpatdet'));
    const [name, setName] = pdetails.name;
    const ndetails = JSON.parse(localStorage.getItem("currnotifi"));
    const description = ndetails.description;
    const timestamp = ndetails.timestamp;


    return (


        <div className='Ndetailsmaincontainer'>

            <div className='Notificationdetails'>

                <div className='NdetPatientName'>
                    <span className='Ndetdescription'>
                        Description : 
                    </span>
                    <span className='Ndetdescrip'>
                        {description}
                    </span>
                </div>

                <div className='Ndetdescription1'>
                    <span className='ndefault'>
                        Timestamp : 
                    </span>
                    <span className='nactual'>
                        {timestamp.slice(0, 10) + ", " + timestamp.slice(11, 19)}
                    </span>
                </div>

            </div>

        </div>


    );  
}