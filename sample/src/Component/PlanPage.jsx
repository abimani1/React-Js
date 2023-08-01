import React, { useContext } from 'react'
import { Consumer } from './CreaeContext'

const PlanPage = () => {
  // Consumer
    const {theme,name}=useContext(Consumer)
  return (
    <div className={!theme ? 'ligth':'dark'}>
        <p>{!theme ? 'ligth':'dark'}</p>
        <p>{name}</p>
    </div>
  )
}

export default PlanPage