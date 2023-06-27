import React, { useEffect } from 'react'
import '../Style/RangeData.css'

const RangeData = () => {

    useEffect(()=>{
    let a=document.querySelectorAll('.num')
    let interval=4000
    a.forEach((a)=>{
        let startValue=0;
        let endValue=parseInt(a.getAttribute("data-val"));
        let duration=Math.floor(interval/endValue)
        let count=setInterval(()=>{
            startValue+=1;
            a.textContent=`${startValue} +`
            if(startValue === endValue){
                clearInterval(count)
            }
        },duration)
    })
    },[])
  return (
    <div className='container'>
        <div className="range-box">
            <div className="range-box-1">
                <div className="range-box-1-1">
                    <span className="num" data-val='200'>000+</span>
                    <p>Client Projects Completed</p>
                </div>
                <div className="range-box-1-1">
                    <span className="num" data-val='40'>00+</span>
                    <p>Team Members</p>
                </div>
                <div className="range-box-1-1">
                    <span className="num" data-val='10'>00+</span>
                    <p>Years in Business</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default RangeData