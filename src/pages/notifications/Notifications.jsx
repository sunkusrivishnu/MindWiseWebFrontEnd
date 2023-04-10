import './notifications.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Pagebarnotifi from '../../components/pagebarnotifi/Pagebarnotifi';
import Nlist from '../../components/nlist/Nlist';

export default function Notifications() {
    return (
        <>
            <Sidebar/>
            <Topbar/>
            <Pagebarnotifi/>
            <Nlist/>
        </>
    );
} 