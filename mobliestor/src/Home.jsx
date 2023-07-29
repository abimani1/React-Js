import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation();
  console.log(location.pathname); // Current URL path
  console.log(location.search); // Query string
  console.log(location.hash); 
  return (
    <div>Home
      <Link to={'/about'}>About</Link>
    </div>
  )
}

export default Home