import Login from "./pages/login/Login"
import Patientslist from "./pages/patientslist/Patientslist";
import Notifications from "./pages/notifications/Notifications";
import Tasklist from "./pages/tasklist/Tasklist";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/dashboard/Dashboard";
import Patientdetails from "./pages/patientdetails/Patientdetails";
import Notificationdetails from "./pages/Notificationdetails/Notificationdetails";
import Taskdetails from "./pages/taskdetails/Taskdetails";
import Logdetails from "./pages/logdetails/Logdetails";
import Chat from "./pages/chat/Chat";
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./components/auth";
import { RequrieAuth } from "./components/RequrieAuth";

function App() 
{

  return (

    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="dashboard" element={<RequrieAuth><Dashboard /></RequrieAuth>}>
          {/* <Route path="addtask" element={<Addtask />} /> */}
        </Route>

        <Route path="patientslist" element={<RequrieAuth><Patientslist /></RequrieAuth>}>         
          <Route path="patientdetails" element={<RequrieAuth><Patientdetails /></RequrieAuth>} />
        </Route>

        <Route path="patientslogs" element={<RequrieAuth><Notifications /></RequrieAuth>}>
        </Route>

        <Route path="profile" element={<RequrieAuth><Profile /></RequrieAuth>} />
        <Route path="patientslist/patientdetails/suggesttask" element={<RequrieAuth><Tasklist /></RequrieAuth>}/>
        <Route path="patientslist/patientdetails/notificationdetails" element={<RequrieAuth><Notificationdetails /></RequrieAuth>}/>
        <Route path="patientslist/patientdetails/suggesttask/taskdetails" element={<RequrieAuth><Taskdetails /></RequrieAuth>}/>
        <Route path="patientslogs/logdetails" element={<RequrieAuth><Logdetails /></RequrieAuth>}/>
        <Route path="patientslist/patientdetails/chat" element={<RequrieAuth><Chat /></RequrieAuth>}/>

      </Routes>
    </AuthProvider>

  );
}

export default App;