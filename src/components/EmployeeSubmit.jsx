import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';



function EmployeeSubmit() {
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm()
     
    let dataSubmit=(data)=>{
        console.log(data)
        fetch("/users",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then(()=>{
            alert("form submited")
        })
    }
    console.log(errors)
  return (
    <div className='employee-form-submit'>
        <h1>Employee Form Submition</h1>
        <form className='employee-form' onSubmit={handleSubmit(dataSubmit)}>
            <label htmlFor="">Firstname:</label>
            <input type="text" placeholder='Firstname'
            {...register("firstName",{
                required:{value:true,message:"fullName required "}
            })}
            />
        <div className='form-error-message'>{errors.firstName?.message}</div>
        <label htmlFor="">LastName:</label>
        <input type="text" placeholder='LastName'
            {...register("lastName",{
                required:{value:true,message:"fullName required required"}
            })}
            />
            <div className='form-error-message'>{errors.lastName?.message}</div>
        <label htmlFor="">Email:</label>
        <input
        type="text"
        placeholder="Email"
        {...register("email", {
          required: { value: true, message: "email is required" },
          pattern: {
            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
            message: "samplemail@gmail.com  is valid",
          },
        })} //register accepts 2 argument name of the string and the object
      />
        <div className='form-error-message'>{errors.email?.message}</div>
        <label htmlFor="">Contact:</label>
        <input type="number" placeholder='phone-number'
        {...register("phoneNumber",{
            required:{value:true,message:"Contact required"},
            minLength:{
                value:10,message:"min length 10"
            },
            maxLength:{
                value:10,message:"max length is 10"
            },
            pattern:{
                value:/^[7-9][0-9]{9}$/,message:"enter valid mobile number"
            },setValueAs: v => Number(v),
        })}/>
        <div className='form-error-message'>{errors.phoneNumber?.message}</div>
        <label htmlFor="">Department:</label>
        <input type="text" placeholder='department' 
        {...register("department",{
            required:{value:true,message:"department required"}
        })}/>
        <div className='form-error-message'>{errors.department?.message}</div>
        <label htmlFor="">Designation:</label>
        <input type="text" placeholder='Position' 
        {...register("position",{
            required:{value:true,message:"Designation required"}
        })}/>
        <div className='form-error-message'>{errors.position?.message}</div>
        <label htmlFor="">Salary:</label>
        <input type="number" placeholder='Salary'
            {...register("salary", {
            setValueAs: v => parseInt(v),
            })}
        />
        <div className='form-error-message'>{errors.salary?.message}</div>
        <label htmlFor="">Location:</label>
        <input type="text" placeholder='Location' 
        {...register("location",{
            required:{value:true,message:"location is required"}
        })}/>
        <div className='form-error-message'>{errors.location?.message}</div>
        <button className='form-button-1' onClick={()=>{navigate(-1)}}>Back</button>
        <button className='form-button' type='submit'>submit</button>
        </form>
    </div> 
  )
}

export default EmployeeSubmit