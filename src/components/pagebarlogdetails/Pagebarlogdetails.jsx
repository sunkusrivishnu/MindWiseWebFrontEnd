import './pagebarlogdetails.css';
import { useNavigate } from 'react-router-dom';

export default function Pagebarlogdetails() {

    const navigate = useNavigate();
    
    return (
        <div className="LogDetbarmaincontainer">
    
            <div className="LogDetPresentUsage" onClick={()=>navigate(-1)}>
                <span className="LogDetPre">
                    Logs
                </span>
            </div>

            <div className='LogDetPresentUsage2'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='LogDetdetPresentUsage3' >
                <span className="LogDetPre1">
                    Log details
                </span>
            </div>

            <div className="LogDetdivider">

            </div>

        </div>
    );
}