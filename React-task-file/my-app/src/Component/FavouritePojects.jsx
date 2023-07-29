import React, { useEffect, useState } from 'react'
import {LeftOutlined, RightOutlined } from '@ant-design/icons'
import '../Style/favourite.css'

const FavouritePojects = () => {
    const[countBox,setCountBox]=useState(data.length)
    const[count,setCount]=useState(0)
    // console.log(countBox);

    // const moveForward=()=>{
    //     const caru=document.querySelectorAll(".cur")
    //     console.log();
    // }

    const leftButton=(event)=>{
        // event.preventDefault()
        const caru=document.querySelectorAll(".cur")
        if(count<caru.length-1){
            console.log(count);
            caru[count].classList.add('hidden')
            setCount(count+1)
        }
    }
    // console.log(count);
    const rightButton=()=>{

    }

  return (
    <div className="continer">
        <div className="row">
            <div className="project-box">
                <div className="project-text-box">
                    <div className="project-text-head">
                        <p>
                            Some of  our favourite projects <span></span>
                        </p>
                        <p className="project-subText">Learn how we built them</p>
                    </div>
                    
                </div>
                <div className="project-explan-box">
                    <div className="display-project-box">
                        <div className="action-but">
                            <button onClick={leftButton}><LeftOutlined /></button>
                            <button onClick={rightButton}><RightOutlined /></button>
                        </div>
                        <div className="cur-box">
                            {data.map((value,index)=>{
                                return(
                                <div className="cur" style={{backgroundColor:value.bg}}  key={index}>
                                    <div className="cur-head-logo">
                                        <p>{value.title}</p>
                                    </div>
                                    <div className="cur-sub-title">
                                        <p>{value.sub_title}</p>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FavouritePojects

const data=[
    {
        title:'HydroOttawa 1',
        sub_title:'Chaudiere Falls Augmented Reality App',
        bg:'rgb(185, 22, 22)'
    },
    {
        title:'HydroOttawa 2',
        sub_title:'Chaudiere Falls Augmented Reality App',
        bg:'rgb(12, 52, 154)'
    },
    {
        title:'HydroOttawa 3',
        sub_title:'Chaudiere Falls Augmented Reality App',
        bg:'rgb(19, 105, 20)'
    }
]