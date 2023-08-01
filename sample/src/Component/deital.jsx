import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Deital = () => {

    const id=useParams()

    const[data,setData]=useState()


    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id.id}`).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    console.log('useState',data);
  return (
    <div>
       {!data ? <><h1>loading</h1></>:<div>
            <img src={data.images[0]} alt="img"/>
            <p>name {data.title}</p>
            <p>price {data.price}</p>
        </div> }
    </div>
  )
}

export default Deital