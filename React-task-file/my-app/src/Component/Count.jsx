import React, { useState } from 'react'

const Count = () => {
    const[countNumber,setCountNumber]=useState(0);

    const increment=()=>{
        setCountNumber(countNumber+1)
    }

    const decrement=()=>{
        setCountNumber(countNumber<=0 ? 0:countNumber-1)
    }

  return (
    <div>
        <button onClick={increment}>+</button>

            {countNumber}

        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Count