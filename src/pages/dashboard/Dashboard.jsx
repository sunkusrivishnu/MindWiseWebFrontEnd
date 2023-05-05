import './dashboard.css';
import Sidebard from '../../components/sidebard/Sidebard';
import Topbar from '../../components/topbar/Topbar';
import Pagebardashboard from '../../components/pagebardashboard/Pagebardashboard';
import Ddetails from '../../components/ddetails/Ddetails';


export default function Dashboard() {
    return(
        
        <>
            <Sidebard/>;
            <Topbar/>;
            <Pagebardashboard/>;
            <Ddetails/>;
        </>
    );
}