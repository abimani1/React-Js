import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
      {stuData.first_name}
    </div>
  )
}



export default ParamData