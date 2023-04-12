import './notifications.css';
import Sidebarn from '../../components/sidebarn/Sidebarn';
import Topbar from '../../components/topbar/Topbar';
import Pagebarnotifi from '../../components/pagebarnotifi/Pagebarnotifi';
import Nlist from '../../components/nlist/Nlist';

export default function Notifications() {
    return (
        <>
            <Sidebarn/>
            <Topbar/>
            <Pagebarnotifi/>
            <Nlist/>
        </>
    );
} 