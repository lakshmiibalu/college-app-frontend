import axios from 'axios'
import React, { useState } from 'react'
import NewNav from './NewNav'

const AddMarks = () => {

    const [input,setInput] = useState(
        {
            "userId":sessionStorage.getItem("userId"),
            "english":"",
            "maths":"",
            "physics":"",
            "biology":"",
            "chemistry":""
        }
    )
    const inputHandler = (event)=>{
        setInput(
            {...input,[event.target.name]:event.target.value}
        )
    }
    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3005/api/marks/addmarks",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {

                    alert("Marks Added")
                    setInput(
                        {
                            "userId":sessionStorage.getItem("userId"),
                            "english":"",
                            "maths":"",
                            "physics":"",
                            "biology":"",
                            "chemistry":""
                        }
                    )
                    
                } else {
                    
                    alert("Error")
                    setInput(
                        {
                            "userId":sessionStorage.getItem("userId"),
                            "english":"",
                            "maths":"",
                            "physics":"",
                            "biology":"",
                            "chemistry":""
                        }
                    )
                }
            }
        )
    }
  return (
    <div>

        <NewNav/>

        <br />
        <br />

        

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">English</label>
                            <input type="text" className="form-control" name="english" value={input.english} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Mathematics</label>
                            <input type="text" className="form-control" name="maths" value={input.maths} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Physics</label>
                            <input type="text" className="form-control" name="physics" value={input.physics} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Biology</label>
                            <input type="text" className="form-control" name="biology" value={input.biology} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Chemistry</label>
                            <input type="text" className="form-control" name="chemistry" value={input.chemistry} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValues}>Add</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddMarks