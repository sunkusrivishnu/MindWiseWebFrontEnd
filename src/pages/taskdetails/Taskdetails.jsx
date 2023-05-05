import "./taskdetails.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Pagebartaskdetails from "../../components/pagebartaskdetails/Pagebartaskdetails";
import Tdetails from "../../components/tdetails/Tdetails";

export default function Taskdetails() {

    return (
        <>
            <Sidebar/>;
            <Topbar/>;
            <Pagebartaskdetails/>;
            <Tdetails/>;
        </>
    );

}