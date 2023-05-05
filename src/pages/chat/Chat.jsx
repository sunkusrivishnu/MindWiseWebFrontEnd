import "./chat.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Pagebarchat from "../../components/pagebarchat/Pagebarchat";
import Cdetails from "../../components/cdetails/Cdetails";


export default function Chat() {
    return (
        
        <>
            <Topbar/>;
            <Sidebar/>;
            <Pagebarchat/>;
            <Cdetails/>;
        </>
    );
}