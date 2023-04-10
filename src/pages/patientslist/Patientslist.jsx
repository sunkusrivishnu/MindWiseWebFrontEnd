import "./patientslist.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Pagebar from "../../components/pagebar/Pagebar";
import Plist from "../../components/plist/Plist";

export default function patientslist(){
    return (
        <>
            <Topbar/>
            <Pagebar/>
            <Sidebar/>
            <Plist/>
        </>        
    );
}