import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate()

    const [input,setInput] = new useState(
        {
            "userName":"",
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
        if (input.userName == "admin" && input.password == "admin") {

           navigate("/add")
            
        } else {

            alert("invalid login")
            setInput(
                {
                    "userName":"",
                    "password":""
                }
            )
            
        }
    }
    
  return (
    <div>

        <br />
        <br />


        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">User Name</label>
                            <input type="text" className="form-control" name="userName" value={input.userName} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" name="password"  className="form-control"  value={input.password} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-info" onClick={readValues}>Login</button>
                        
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <Link class="nav-link" to="/studentlogin"> Student Login</Link>
                        
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin