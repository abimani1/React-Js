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
    <div>
      {stuData.length!==0 ? <Card value={stuData}/>:<ErrorPage/>}
      
    </div>
  )
}

const Card=({value})=>{

  return(
    <div className='card'>
    {/* <p></p> */}
    <div className="card-box">
      <div className="card-title">
        <p>Student Detail</p>
      </div>
      <div className="card-details">
        <div className="card-name">
          <label>ID</label>
          <p>{value.id}</p>
        </div>
        <div className="card-name">
          <label>Name</label>
          <p>{value.first_name}</p>
        </div>
        <div className="card-name">
          <label>Email</label>
          <p>{value.email}</p>
        </div>
        <div className="card-name">
          <label>Gender</label>
          <p>{value.gender}</p>
        </div>
      </div>
    </div>
    <div className="back-pev">
      <Link className='back-but' to='/'>go back</Link>
    </div>
  </div>
  )
}

const ErrorPage=()=>{
  return(
    <div className="error-box">
      <div className="error-message">
        <p className="error-status">404 error</p>
        <p>invalid id</p>
      </div>
    </div>
  )
}


export default ParamData