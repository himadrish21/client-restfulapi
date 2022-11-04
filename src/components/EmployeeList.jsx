import useFetch from "./useFetch";
import { Link ,useNavigate} from "react-router-dom";

function EmployeeList() {
  let { data, pending, error } = useFetch(`/users`);
  let navigate =useNavigate()
  return (
    <div>
      <h1>Employee Table</h1>
       <table className="Employee-List">
      <thead>
        <tr>
          <th></th>
          <th>name</th>
          <th>email</th>
          <th>contact</th>
          <th>department</th>
        </tr>
      </thead>
      <tbody>
        {error && <h1> { error } </h1>}
        {pending && <div className='loader'>Loding.......</div> }
        {data &&
          data.users.map((employeed, index) => {
            return (
              <tr key={employeed._id}>
                <td>
                  <Link to={`/details${employeed._id}`}>{index + 1} </Link>
                </td>
                <td><Link to={`/details${employeed._id}`}>{employeed.firstName}</Link></td>
                <td>{employeed.email}</td>
                <td>{employeed.phoneNumber}</td>
                <td>{employeed.department}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
    <button className="Add-employee" onClick={()=>{navigate('/employeeSubmit')}}>Add Employee</button>
    </div>
  );
}

export default EmployeeList;
