import React, { useEffect, useState } from 'react'
import CollegeNav from './CollegeNav'
import axios from 'axios'


const ViewMarks = () => {
    
    const [data,setData] = useState([])
    const getData = ()=>{
        axios.get("http://localhost:3005/api/marks/viewmarks").then(
            (response) => {setData(response.data)}
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

                <table class="table table-bordered table-danger table-striped">
                <thead class="table-light">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Roll No.</th>
                    <th scope="col">Admission No.</th>
                    <th scope="col">College Name</th>
                    <th scope="col">Parent's Name</th>
                    <th scope="col">Mobile No.</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">English</th>
                    <th scope="col">Mathematics</th>
                    <th scope="col">Physics</th>
                    <th scope="col">Biology</th>
                    <th scope="col">Chemistry</th>


                    </tr>
                </thead>
                <tbody>
                    
                    {
                        data.map(
                            (value,index)=>{
                                return <tr>

                                
                                <td>{value.userId.name}</td>
                                <td>{value.userId.rollno}</td>
                                <td>{value.userId.admno}</td>
                                <td>{value.userId.clgname}</td>
                                <td>{value.userId.parent}</td>
                                <td>{value.userId.mobno}</td>
                                <td>{value.userId.email}</td>
                                <td>{value.english}</td>
                                <td>{value.maths}</td>
                                <td>{value.physics}</td>
                                <td>{value.biology}</td>
                                <td>{value.chemistry}</td>


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

export default ViewMarks