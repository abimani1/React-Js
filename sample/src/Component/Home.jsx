import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
  const inputValue=useRef()

  const navgation=useNavigate()
  const[data,setData]=useState([])
  const[search,setSearch]=useState()
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

const onsearch=()=>{
  setSearch(inputValue.current.value)
}
useEffect(()=>{
  axios.get(`https://dummyjson.com/products/search?q=${search}`).then((res)=>{
    setData(res.data.products)
    console.log(res);
  }).catch((error)=>{
    console.log(error);
  })
  console.log(search);
},[search])
  return (
    <div>Home
      <div className="serch-box" style={{marginBottom:'20px'}}>
        <input type="text" name="serch"  ref={inputValue} /><button type="button" onClick={onsearch}>Search</button>
      </div>
        {data.length===0 ? <h1>No Data is Found </h1> :<div>
          {data.map((item)=>(
            <>
            <Card  view={cardKey} image={item.images[0]} title={item.title} price={item.price} id={item.id}/>
            </>
          ))}
        </div>}
        
        {/* {perName} */}
    </div>
  )
}

export default Home