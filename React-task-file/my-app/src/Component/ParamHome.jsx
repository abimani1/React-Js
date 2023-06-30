import React, { useEffect, useState } from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'
import '../Style/style.css'

const ParamHome = () => {

    const[data,setData]=useState([])

    const getData=async()=>{
        await axios.get(`http://localhost:4000/api/student/get`).then((res)=>{
            setData(res.data)
        }).catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className='filed-box'>
            <div className="filed-title">
                <p>Student Records</p>
            </div>
            <div className="filed-data">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Display</th>
                    </tr>
                    {data.map((student)=>(
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.first_name}</td>
                                <td>{student.email}</td>
                                <td>{student.gender}</td>
                                <td><Link className='link' to={`/student/${student.id}`}>Display</Link></td>
                            </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}
export default ParamHome