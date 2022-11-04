import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';


function EmployeeDetails() {
    let { id } = useParams();

    let navigate = useNavigate();
    let { data, pending, error } = useFetch(`/users/${id}`);


  return (
    <div className='Employee-details'>
      <div ><h1 style={{padding:"30px",backgroundColor:"#2b2d42",color:"white"}}>Employee Detail</h1></div>
      <div className='details'>
      {error && <h1> { error } </h1>}  
        <h1>FirstName:{  data?.user.firstName}</h1>
        <h1>LastName:{  data?.user.lastName}</h1>
        <h1>Email:{  data?.user.email}</h1>
        <h1>Contact:{ data?.user.phoneNumber}</h1>
        <h1>Depatment:{  data?.user.department}</h1> 
        <h1>Designation:{  data?.user.position}</h1>
        <h1>Salary:{  data?.user.salary}</h1>
        <h1>Location:{  data?.user.location}</h1>
      </div>
      <button className='back-button' onClick={()=>{navigate(-1)}} style={{padding:"9px 35px",fontSize:"19px",backgroundColor:"#BDE0FE",border:"none",borderRadius:"10px"}}>Back</button>
    </div>
  )
}

export default EmployeeDetails