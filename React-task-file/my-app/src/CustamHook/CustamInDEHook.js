import { useState } from "react";

export default function useCount(initialsate){
    const[value,setValue]=useState(initialsate)
    const increment=()=>{
        return setValue(value+1)
    }
    const decrement=()=>{
        return setValue(value-1)
    }
    const reset=()=>{
        return setValue(0)
    }
    return [value,increment,decrement,reset]
}