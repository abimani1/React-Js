import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const About = () => {
  const history=useNavigate()
  const handleButtonClick = () => {
    // Programmatic navigation to a specific route
    history('/Error');
  };
  const location = useLocation();
  console.log(location.pathname); // Current URL path
  console.log(location.search); // Query string
  console.log(location.hash);
  
  return (
    <div>About
      <Link to={'/'}>Home</Link>
      <Link to={'/about/test'}>Component</Link>
      <button onClick={handleButtonClick}>redirect</button>
      <Outlet/>
    </div>
  )
}

export default About