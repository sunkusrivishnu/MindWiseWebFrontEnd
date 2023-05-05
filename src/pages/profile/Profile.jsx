import './profile.css';
import Sidebarp from '../../components/sidebarp/Sidebarp';
import Topbar from '../../components/topbar/Topbar';
import Pagebarprofile from '../../components/pagebarprofile/Pagebarprofile';
import Profilemanagement from '../../components/Profilemanagement/Profilemanagement';

export default function Profile() {
    return (
        <>
            <Sidebarp/>;
            <Topbar/>;
            <Pagebarprofile/>;
            <Profilemanagement/>;
        </>
    );
}