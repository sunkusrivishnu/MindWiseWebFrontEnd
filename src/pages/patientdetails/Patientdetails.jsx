import './patientdetails.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Pagebarpatient from '../../components/pagebarpatient/Pagebarpatient';
import Pdetails from '../../components/pdetails/Pdetails';
import Profilemanagement from '../../components/Profilemanagement/Profilemanagement';
import { useLocation } from 'react-router-dom';

export default function Patientdetails() {

    const location = useLocation();
    const data = location.state.data;
    return(
        <>
            <Topbar/>;
            <Sidebar/>;
            <Pagebarpatient/>;
            <Pdetails/>
        </>
    );

}