import React from 'react'
import {useSelector}from 'react-redux'
const Header = () => {
    const result=useSelector((state)=>state.getData)
    console.warn(result);
  return (
    <div>Header
        <div>
            <p>name: {result.name}</p>
        </div>
    </div>
  )
}

export default Header