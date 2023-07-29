import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>NavBar
        <div style={{display:'flex',justifyContent:'center',columnGap:'10px'}}>
            <Link to='/'>Home</Link>
            <Link to='/about'>about</Link>
        </div>
    </div>
  )
}

export default NavBar