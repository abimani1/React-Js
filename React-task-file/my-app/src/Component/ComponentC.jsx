import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

const ComponentC = ({navigate}) => {
  const value=useContext(CounterContext)
  console.log('running C');
  return (
    <div>
      Component C
      {value}
      {/* <button onClick={()=>navigate('ComponentB')}>goback</button>
      <button onClick={()=>navigate('ComponentA')}>Home</button> */}
    </div>
  )
}

export default ComponentC