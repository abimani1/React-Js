import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const HookEffectFunction = () => {
    const[x,setX]=useState('')
    const[y,setY]=useState('')
    const[name,setName]=useState('')
    const[cla,setCla]=useState('')

    const lengthScreen=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }

   

    useEffect(()=>{
        console.log('useEffect');
        console.log('Monuting');
        window.addEventListener('mousemove',lengthScreen)    
    },[])
  return (
    <div>
        {/* <input type="text" onChange={(e)=>{setName(e.target.value)}} /> */}
        <input type="text" onChange={(e)=>{setCla(e.target.value)}}/>
        {/* <p>{name}</p> */}
        <p>{cla}</p>
    </div>
  )
}

export default HookEffectFunction