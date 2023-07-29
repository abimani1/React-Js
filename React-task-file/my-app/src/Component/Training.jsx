import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useAsyncError } from 'react-router-dom';

export const Training = () => {
    
    const [count,setCount]=useState(0);
    const[arr,setArr]=useState([1,2,3])

    const adding=()=>{
      let sum
      for(let a in arr){
        setCount(arr[a]+1)
      }
    }

    const mem=useMemo(()=>adding(),[arr])

    return (
      <div>
        <p>{count}</p>
        <p>{arr}</p>
        <button onClick={mem}>adding</button>
      </div>
    );
  };