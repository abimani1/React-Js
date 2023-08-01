import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { Consumer } from './CreaeContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoadData = () => {
    const[data,setData]=useState([])
    const navgation=useNavigate()
    const feachData=async()=>{
        await axios.get(`https://dummyjson.com/products`).then((res)=>{
            setData(res.data.products)
        }).catch((error)=>{
            console.error(error)
        })
    }
    const viewChart=(id)=>{
        navgation(`/deital/${id}`)
    }
    useEffect(()=>{
        feachData()
    },[])
  return (
    <div>LoadData
        <div>
            <Consumer.Provider value={{data,viewChart}}>
                <ProductList/>
            </Consumer.Provider>
        </div>
    </div>
  )
}

export default LoadData