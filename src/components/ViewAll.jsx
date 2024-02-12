import React, { useEffect, useState } from 'react'
import CollegeNav from './CollegeNav'
import axios from 'axios'


const ViewAll = () => {

    const[data,setData] = useState([])
    const getData = ()=>{
        axios.get("http://localhost:3005/api/admin/viewstud").then(
            (response)=>{setData(response.data)}
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>

        <CollegeNav/>

        <br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table table-bordered table-success table-striped">
                <thead class="table-light">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Roll Number</th>
                    <th scope="col">Admission Number</th>
                    <th scope="col">College Name</th>
                    <th scope="col">Parent's Name</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Email Id</th>

                    </tr>
                </thead>
                <tbody>
                    
                    {
                        data.map(
                            (value,marks)=>{
                                return <tr>

                                <td>{value.name}</td>
                                <td>{value.rollno}</td>
                                <td>{value.admno}</td>
                                <td>{value.clgname}</td>
                                <td>{value.parent}</td>
                                <td>{value.mobno}</td>
                                <td>{value.email}</td>
            
                                </tr>
                            }
                        )
                    }
                    
                </tbody>
                </table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll