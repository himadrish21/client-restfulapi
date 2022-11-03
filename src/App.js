import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeList from "./components/EmployeeList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<EmployeeList/>}/>
          <Route path="/details:id"element={<EmployeeDetails />}/>
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
