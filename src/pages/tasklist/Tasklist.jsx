import './tasklist.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Pagebartasks from '../../components/pagebartasks/Pagebartasks';
import Tlist from '../../components/tlist/Tlist';

export default function Tasklist() {
    return (
        <>
            <Sidebar/>
            <Topbar/>
            <Pagebartasks/>
            <Tlist/>
        </>
    );
}