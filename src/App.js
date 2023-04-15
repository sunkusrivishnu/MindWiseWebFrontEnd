import Login from "./pages/login/Login"
import Patientslist from "./pages/patientslist/Patientslist";
import Notifications from "./pages/notifications/Notifications";
import Tasklist from "./pages/tasklist/Tasklist";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() 
{

  return (
    <>
      {/* <Patientslist/> */}
      {/* <Notifications/> */}
      <Login/>
      {/* <Tasklist/> */}
    </>
    // <Router>
    //   <Switch>
    //     <Route exact path="/login" component={Login} />
    //     <Route path="/patientslist" component={Patientslist} />
    //   </Switch>
    // </Router>
  );
}

export default App;