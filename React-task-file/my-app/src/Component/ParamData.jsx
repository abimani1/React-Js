import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Style/style.css'

const ParamData = () => {
  const [stuData,setStuData]=useState([])
  const {id}=useParams()

  const getDataId=async()=>{
    await axios.get(`http://localhost:4000/api/student/get/${id}`).then((res)=>{
        setStuData(res.data)
    }).catch((error)=>{
        console.log(error);
    })
}
useEffect(()=>{
    getDataId()
},[])
  return (
    <div className='card'>
      <div className="card-box">
        <div className="card-title">
          <p>Student Detail</p>
        </div>
        <div className="card-details">
          <div className="card-name">
            <label>ID</label>
            <p>{stuData.id}</p>
          </div>
          <div className="card-name">
            <label>Name</label>
            <p>{stuData.first_name}</p>
          </div>
          <div className="card-name">
            <label>Email</label>
            <p>{stuData.email}</p>
          </div>
          <div className="card-name">
            <label>Gender</label>
            <p>{stuData.gender}</p>
          </div>
        </div>
      </div>
      <div className="back-pev">
        <Link className='back-but' to='/'>go back</Link>
      </div>
    </div>
  )
}



export default ParamData