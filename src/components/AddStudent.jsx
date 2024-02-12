import React, { useState } from 'react'
import CollegeNav from './CollegeNav'

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
        
    }
  return (
    <div>

        <CollegeNav/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-label" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Roll Number</label>
                            <input type="text" className="form-label" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Admission</label>
                            <input type="text" className="form-label" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">College Name</label>
                            <input type="text" className="form-label" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Parent's Name</label>
                            <input type="text" className="form-label" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Mobile Number</label>
                            <input type="text" className="form-label" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="email" name="email"  className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password"  className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-info">Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}



export default AddStudent