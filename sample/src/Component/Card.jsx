import React from 'react'
import Home from './Home'

const Card = ({image,title,price,id,view}) => { 
 

  return (
    <div key={id}>
        <div className="img-box">
            <img src={image} alt="card1"/>
        </div>
        <div>
            <p>Name{title}</p>
        </div>
        <div>
            <p>Name{price}</p>
        </div>
        <button onClick={()=>view(id)}>View Cart</button>
    </div>
  )
}

export default Card