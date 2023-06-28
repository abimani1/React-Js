import React, { useMemo, useReducer, useRef, useState } from 'react'
import { createContext } from 'react'
import Fcomponent from './Fcomponent'
import { ConterContext } from './Contact'

const initialsate=[]
const reducer=(state,action)=>{
  switch(action.type){
    case "add":
      return [...state,action.payload]
    case "delect":
      return state.filter(contact=>{
        return contact.id !==action.payload.id;
      })
    default:
      throw new Error();
  }
}
const ReactHook = () => {
  // useReducer
  const [state,dispatch]=useReducer(reducer,initialsate)

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const addContact=(e)=>{
    e.preventDefault()
    const contact={
      id:Date.now(),
      name,
      email
    }
    setName("") 
    setEmail("")
    dispatch({type:"add",payload:contact})
  }
  return (
    <div>
       {/* <button onClick={increment}>+</button>
       <div>{step}</div>
       <button onClick={decrement}>-</button>
       <button onClick={checkIn}>cheack</button>
       <ConterContext.Provider value={data}>
       <Fcomponent />
       </ConterContext.Provider> */}
       {/* <div>
       <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} ref={inputEl} />
       <button onClick={reSet}>Reset</button>
       <Display name={name}></Display>
       </div> */}

       <div style={{width:"300px",border:"1px solid black",padding:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <p>userReducer</p>
          <form onSubmit={addContact} style={{display:"flex",flexDirection:"column",rowGap:"20px",justifyContent:"center",alignItems:"center"}}>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <div>
            <button >Add</button>
            </div>
          </form>
       </div>
       <div>
          {state.map((contact)=>{
            return(
              <li style={{listStyle:"none"}} key={contact.id}>
                <h2>{contact.name}</h2>
                <h2>{contact.email}</h2>
                <button onClick={()=>{dispatch({type:"delect",payload:{id:contact.id}})}}>Delect</button>
              </li>
            )
          })}
       </div>
    </div>
  )
}

const Display= React.memo(({name})=>{
  console.log('rendered');
  return <p>Hello {name}</p>
},[])

export default ReactHook

// const[step,setStep]=useState(0)
//   const[flag,setFlag]=useState(false)
//   const inputEl=useRef("")
//   const[name,setName]=useState("")
//   // console.log(inputEl.current);
//   console.log(useReducer());
//   const data=[
//     {
//       id:'1',
//       name:'mani'
//     },
//     {
//       id:'2',
//       name:'sam'
//     },
//   ]
//   const reSet=()=>{
//     setName("")
//     inputEl.current.focus()
//   }
    
//   const increment=()=>{
//     setStep(step+1)
//   }
//   const decrement=()=>{
//     if(step>0){
//       setStep(step-1)
//     }
//   }
//   const checkIn=()=>{
//     setFlag(!flag)
//     console.log(flag);
//   }