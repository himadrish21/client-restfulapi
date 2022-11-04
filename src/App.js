import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeList from "./components/EmployeeList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EmployeeSubmit from "./components/EmployeeSubmit";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<EmployeeList/>}/>
          <Route path="/details:id"element={<EmployeeDetails />}/>
          <Route path="/employeeSubmit" element={<EmployeeSubmit/>}/>
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
