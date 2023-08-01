// import { render } from '@testing-library/react'
import React, { useReducer } from 'react'

const Reducer = () => {
    const reduser=(state,action)=>{
        switch(action.type){
            case "view":
                return false
            case "hidden":
                return true
            default:
                return state;
        }
    }
    const inz=false
    const [data,dispathch]=useReducer(reduser,inz)
    const handleView=()=>{
        dispathch({type:'view'})
    }
    const handleHidden=()=>{
        dispathch({type:'hidden'})
    }
  return (
    <div>
        <button onClick={handleView}>Show</button><button onClick={handleHidden}>Hidden</button>
        {!data ? <h1>Hai i am see you</h1>:<h1>I am Hide</h1>}
    </div>
  )
}

export default Reducer