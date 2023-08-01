import React, { useContext } from 'react'
import { Consumer } from './CreaeContext'

const ProductList = () => {
    const {data, viewChart}=useContext(Consumer)

  return (
    <div>ProductList
        <div>
            {data.map((item,index)=>{
                return(
                    <div key={index}>
                        <img src={item.images[1]} alt="ImageLoading"/>
                        <p>{item.title}</p>
                        <button onClick={()=>viewChart(item.id)}>View Card</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductList