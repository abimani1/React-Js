import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Deital = () => {

    const id=useParams()

    const[data,setData]=useState()
    console.log(id);
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id.id}`).then((res)=>{
            console.log(res.data);
            setData(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div>
       {data.images ?  <div>
            <img src={data.images[0]} alt="" srcset="" />
            <p>name {data.title}</p>
            <p>price {data.price}</p>
        </div> : <></>}
    </div>
  )
}

export default Deital