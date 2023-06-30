import React from 'react'
import useCount from '../CustamHook/CustamInDEHook'

const Counter = () => {
    const [count,increment,decrement,reset]=useCount(0)
  return (
    <div style={{width:"300px",border:"1px solid black",padding:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset
        </button>
         
    </div>
  )
}

export default Counter