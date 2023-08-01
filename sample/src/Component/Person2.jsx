import React, { useState } from 'react'
import HOD from './HOD'

const Person2 = () => {
    const[amount,setAmount]=useState(10)

const handleAmount=()=>{
  setAmount(amount*4)
}
  return (
    <div>
        <div>
        <h2>Person 2 amount{amount}</h2>
        <button onClick={handleAmount}>Increment</button>
      </div>
    </div>
  )
}

export default HOD(Person2)