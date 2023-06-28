import React, { useContext } from 'react'
import { ConterContext } from './Contact'

const Fcomponent = ({count}) => {
    const value=useContext(ConterContext)
  return (
    <div>Fcomponent
        <p>{count}</p>
        <p>{value.id}</p>
        <Fchild></Fchild>
    </div>
  )
}

const Fchild=({count})=>{
    const value=useContext(ConterContext)
    return(
        <div>
            Fchild
            <p>{count}</p>
            {value.map((item,index)=>(
                <div key={index}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Fcomponent