import React from 'react'
import { useLocation } from 'react-router-dom';

const ComponentA = () => {
    const location = useLocation();
    console.log('name',location.pathname); // Current URL path
    console.log('search',location.search); // Query string
    console.log('hash',location.hash);
  return (
    <div>SubComponent</div>
  )
}

export default ComponentA