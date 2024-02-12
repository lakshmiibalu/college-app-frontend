import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const StudentLogin = () => {

    const navigate = useNavigate()
    const [input,setInput] = useState(
        {
            "email":"",
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
        axios.post("http://localhost:3005/api/student/studlogin",input).then(
            (response)=>{
                console.log(response.data)

                if (response.data.status == "success") {

                    console.log(response.data.userData._id)
                    sessionStorage.setItem("userId",response.data.userData._id)
                    navigate("/addmarks")
                    
                    
                } else{
                if (response.data.status == "invalid user") {

                    alert("Invalid user")
                    setInput(
                        {
                            "email":"",
                             "password":""
                      }
                    )
                    
                }
                if (response.data.status == "incorrect password") {
                    alert("Invalid password")
                    setInput(
                        {
                            "email":"",
                             "password":""
                      }
                    )
                    
                }
            }
            }
        )
    }

  return (
    <div>

        <br />
        <br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler}/>

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password"  className="form-control" value={input.password} onChange={inputHandler}/>

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValues}>Log in</button>

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                            <Link class="nav-link" to="/">Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default StudentLogin