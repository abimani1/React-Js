import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dynamic = () => {
    const [data,setData]=useState([])
    const initialValue ={
        userId:"",
        title:"",
        body:"",
        id:""
    }

    const [userData,setUserData]=useState(initialValue)
    const{userId,id,title,body}=userData

    const show= async()=>{
        await axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            setData(res.data)
            console.log(data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    // Delete

    const deleteData= async (id)=>{
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
            console.log(`id ${id} delect Successfully`)
            show()
        }).catch((error)=>console.log(error))
    }

    // getting the Selected Data

    const selectdate=async(id)=>{
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
            console.log(`id ${id} Update Successfully`)
            setUserData(res.data)
            // console.log(data.userId[id]);
            
        }).catch((error)=>console.log(error))
    }

    // Uploading Data

    const update=async(id)=>{
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,userData).then((res)=>{
            console.log(`id ${id} Update Successfully`)
            setUserData([{userId:"",id:"",title:"",body:""}])
            // console.log(data.userId[id]);
            
        }).catch((error)=>console.log(error))
    }

    useEffect(()=>{
        show()
    },[])

    const onValueChange=(event)=>{
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    // Creating Data

    const SubmitData=async(event)=>{
        event.preventDefault()
        // const sdata={userId:'12'}
        await axios.post('https://jsonplaceholder.typicode.com/posts',userData).then((res)=>{
            console.log(res.data);
            console.log(userData);
         }).catch((error)=>{
            console.log(error);
       }) 
       show()
    }

  return (
    <div>
        <div className="continer">
            <div className="row">
                <div className="box">
                    <div className="head-box">
                    <center><p className='headeTitle'>CRUD Operation</p></center>
                    </div>
                    <div className="form-box">
                        <form>
                            <label>userId</label>
                            <input type="text" name="userId"  value={userId} onChange={(e)=>onValueChange(e)} placeholder='Enter the Id'/>
                            <label>Id</label>
                            <input type="text" name="id"  value={id} onChange={(e)=>onValueChange(e)} placeholder='Enter the Id'/>
                            <label>title</label>
                            <input type="text" name="title" value={title}  onChange={(e)=>onValueChange(e)} placeholder='Enter the Name' />
                            <label>Body</label>
                            <input type="text" name="body" value={body}  onChange={(e)=>onValueChange(e)} placeholder='Enter the Department' />
                            <button type='submit' onClick={SubmitData}>Save</button>
                            <button type='button' id='update' onClick={()=>update(id)}>Update</button>
                        </form>
                    </div>
                    <div className="tableData">
                        <table>
                            <tr>
                                <th>userId</th>
                                <th>id</th>
                                <th>title</th>
                                <th>body</th>
                                <th>Edit</th>
                                <th>Delect</th>
                            </tr>
                            
                            {data.map((items,index)=>(
                                <tr key={index}>
                                    <td>{items.userId}</td>
                                    <td>{items.id}</td>
                                    <td>{items.title}</td>
                                    <td>{items.body}</td>
                                    <td><button type="button" onClick={()=>deleteData(items.id)}>Delect</button></td>
                                    <td><button type="button" id='edit' onClick={()=>selectdate(items.id)}>Edit</button></td>
                                </tr>    
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dynamic