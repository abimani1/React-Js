import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editData, getData } from '../redux/action'


const PersonPage = () => {
    const result=useSelector((state)=>state.getData)
    const dispatch=useDispatch()
    const[inputValue,setInputValue]=useState(result.name)
    const personData={
        name:'manikandan',
        age:'34'
    }
    
    const onchange=(e)=>{
        setInputValue({[e.target.name]:e.target.value})
        // console.log(inputValue);
    }
    const onAdd=()=>{
        console.log(inputValue);
        dispatch(editData(inputValue))
    }
  return (
    <div>PersonPage
        <div>
            <button type="button" onClick={()=>dispatch(getData(personData))}>add</button>
            <div>
                <p>{result.name}</p>
            <input type="text" name="name"  onChange={onchange}/>
            <button onClick={onAdd}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default PersonPage