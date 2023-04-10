import "./topbar.css";
import '@fortawesome/fontawesome-free/css/all.css';


export default function Topbar() {
    return (
        <div className="Tbarmaincontainer">

            <div className="AppName">
                <span className="Logo">
                    MindWise
                </span>
            </div>

            <div className="UserIcon">
                <span className="icon">
                    <i className="fas fa-user"></i>
                </span>
            </div>

            <div className="UserName">
                <p>
                    User
                </p>
            </div>

            <div className="line">

            </div>
        </div>
    );
}