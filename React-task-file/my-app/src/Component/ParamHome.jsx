import React, { useEffect, useState } from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'

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
        <div>
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
                            <td><Link to={`/student/${student.id}`}>Display</Link></td>
                        </tr>
                ))}
            </table>
        </div>
    )
}
export default ParamHome