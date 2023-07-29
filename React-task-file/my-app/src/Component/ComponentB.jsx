import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'
import { UserContext } from './ComponentA';

const ComponentB = ({navigate}) => {
  const value=useContext(UserContext)
  console.log('running B');
  return (
    <div>
       Component B
       {value}
       {/* <button onClick={()=>navigate('ComponentC')}>Next</button> */}
    </div>
  )
}

export default ComponentB