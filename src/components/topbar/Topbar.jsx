import "./topbar.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate} from 'react-router-dom';


export default function Topbar() {

    const navigate = useNavigate();

    const details = JSON.parse(localStorage.getItem('userdetails'));
    const username = details.username;

    return (
        <div className="Tbarmaincontainer">

            <div className="AppName" onClick={()=>navigate('/dashboard')}>
                <span className="Logo">
                    MindWise
                </span>
            </div>

            <div className="UserIcon" onClick={()=>navigate('/profile')}>
                <span className="icon">
                    <i className="fas fa-user"></i>
                </span>
            </div>

            <div className="UserName" onClick={()=>navigate('/profile')}>
                <p>
                    {username}
                </p>
            </div>

            <div className="line">

            </div>
        </div>
    );
}