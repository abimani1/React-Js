import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location=useLocation()
  const{pathname}=location
  console.log(pathname);
  const splitPathaName=pathname
  console.log(splitPathaName);
  return (
    <div>NavBar
        <div style={{display:'flex',justifyContent:'center',columnGap:'10px'}}>
          <ul className='nav-box'>
            <li >
              <NavLink to='/' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'black' })}>Home</NavLink>
            </li>
            
            <li >
              <NavLink to='/about' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'black' })}>about</NavLink>
            </li>
            
            <li >
              <NavLink to='/context' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'black' })}>Context</NavLink>
            </li>
            
            <li >
              <NavLink to='/reducer' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'black' })}>reducer</NavLink>
            </li>
            
            <li >
              <NavLink to='/callBack' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'black' })}>callBack</NavLink>
            </li>
            
            <li >
              <NavLink to='/memo' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'black' })}>memo</NavLink>
            </li>
            
            <li >
              <NavLink to='/contextApi' style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'black' })}>Context API</NavLink>
            </li>
          </ul>
            
            
        </div>
    </div>
  )
}

export default NavBar