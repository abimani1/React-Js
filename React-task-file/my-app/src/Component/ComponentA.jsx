import React, { createContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { CounterContext } from './CounterContext';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ContaxtMain from './ContaxtMain';
export const UserContext = createContext()
const ComponentA = ({navigate}) => {
  // const contact=CounterContext()
 
  const[count,setCount]=useState(0);
  const inc=()=>{
    setCount(count+1)
  }
  const dec=()=>{
    setCount(count-1)
  }

  // console.log('running A');
  const[input,setInput]=useState([])

  const onchange=(e)=>{
    
    setInput({...input,[e.target.name]:e.target.value})
  }

  const onsubmit=(e)=>{
    e.preventDefault()
    console.log(input);
  }

  return (
    <div className='app'>
      {/* <form onSubmit={onsubmit}>
        <input type="text" name="userName" value={input.useName} onChange={onchange} placeholder='enter the name' />
        <input type="text" name="password" value={input.password} onChange={onchange} placeholder='enter the password'/>
        <button type="submit">submit</button>
      </form> */}
      Component A
      
      {/* <Main/> */}
      <CounterContext.Provider value={'read'}>
        <ContaxtMain/>
      </CounterContext.Provider>
      <input type="text" name="name"  />
    </div>
  )
}

export default ComponentA