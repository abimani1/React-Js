import React, { useState } from 'react'
import { Consumer } from './CreaeContext'
import PlanPage from './PlanPage'

const HomePage = () => {
    const[theme,setTheame]=useState(false)
    const changeTheame=()=>{
        setTheame(!theme ? true:false)
    }
  return (
    <div>HomePage
        <div>
            <button onClick={changeTheame}>Change Mode</button>
            <div>
                {/* Provider */}
                <Consumer.Provider value={{theme,name:'Manikandan'}}>
                    <PlanPage/>
                </Consumer.Provider>
            </div>
        </div>
    </div>
  )
}

export default HomePage