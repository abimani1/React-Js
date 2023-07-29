import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navgation=useNavigate()
  const[data,setData]=useState([])
  const cardKey=(id)=>{
    console.log(id);
    navgation(`/deital/${id}`)
  }

  useEffect(()=>{
    axios.get('https://dummyjson.com/products').then((res)=>{
        setData(res.data.products)
    }).catch((error)=>{
        console.error(error)
    })
},[])
  return (
    <div>Home
        <div>
          {data.map((item)=>(
            <>
            <Card  view={cardKey} image={item.images[0]} title={item.title} price={item.price} id={item.id}/>
            </>
          ))}
        </div>
    </div>
  )
}

export default Home