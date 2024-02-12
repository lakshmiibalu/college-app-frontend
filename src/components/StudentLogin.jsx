import React from 'react'
import { Link } from 'react-router-dom'

const StudentLogin = () => {
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
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="" id="" className="form-control" />

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">

                            <button className="btn btn-info">Log in</button>

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