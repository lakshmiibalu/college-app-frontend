import React, { useState } from 'react'
import CollegeNav from './CollegeNav'
import axios from 'axios'

const AddStudent = () => {
    
    const [input,setInput] = useState(
        {
            "name":"",
             "rollno":"",
             "admno":"",
             "clgname":"",
             "parent":"",
             "mobno":"",
             "email":"l",
             "password":""
        }

    )
    const inputHandler = (event)=>{
     setInput(
        {...input,[event.target.name]:event.target.value}
     )    
    }

    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3005/api/admin/adminlogin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {

                    alert("Successfully Added")
                    setInput(
                        {
                            "name":"",
                             "rollno":"",
                             "admno":"",
                             "clgname":"",
                             "parent":"",
                             "mobno":"",
                             "email":"l",
                             "password":""
                        }

                    )

                } else {

                    alert("Something went wrong")
                    setInput(
                        {
                            "name":"",
                             "rollno":"",
                             "admno":"",
                             "clgname":"",
                             "parent":"",
                             "mobno":"",
                             "email":"l",
                             "password":""
                        }
                    )
                }
            }
        )

        
        
    }
  return (
    <div>

        <CollegeNav/>
        <br />
        <br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Name of Student</label>
                            <input type="text" name="name"  className="form-control"  value={input.name} onChange={inputHandler} />


                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Roll Number</label>
                            <input type="text" name="rollno"  className="form-control"  value={input.rollno} onChange={inputHandler} />


                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Admission Number</label>
                            <input type="text" name="admno"  className="form-control"  value={input.admno} onChange={inputHandler} />


                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">College Name</label>
                            <input type="email" name="clgname"  className="form-control"  value={input.clgname} onChange={inputHandler} />


                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Parent's Name</label>
                            <input type="text" name="parent"  className="form-control"  value={input.parent} onChange={inputHandler} />


                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Mobile Number</label>
                        <input type="text" name="mobno"  className="form-control"  value={input.mobno} onChange={inputHandler} />


                        </div>
                        
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="email" name="email"  className="form-control"  value={input.email} onChange={inputHandler} />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password"  className="form-control"  value={input.password} onChange={inputHandler} />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValues}>Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}



export default AddStudent