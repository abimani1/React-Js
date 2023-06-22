import React, { useEffect, useState } from 'react'
import axios from 'axios'


const CRUD = () => {
    const [dataStore,setDataStore]=useState([])

    const newData=[{id:101,title:"The long book",body:"Man come form the lang train",userId:"11"}]

    // Show
    const show= async ()=>{
        const respones= await axios.get('https://jsonplaceholder.typicode.com/posts',{method:"GET"})
        setDataStore(respones.data)
        console.log(dataStore);
    }

    //insert
    const insert= async ()=>{
        await axios.post('https://jsonplaceholder.typicode.com/posts',newData).then((res)=>{
            console.log('insert the new value successfully');
            console.log(res.data);
            // show()
         }).catch((error)=>{
            console.log(error);
       })   
    }

    // update
    const update= async ()=>{
        let id=100
        let modify={title:"hai"}
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,modify).then((res)=>{
            console.log('Update the data');
            console.log(res.data);
            // show()
         }).catch((error)=>{
            console.log(error);
       })   
    }
    
    const delect= async()=>{
        let id=99
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
            console.log(`id ${id} delect Successfully`)
        }).catch((error)=>console.log(error))
    }

    useEffect(()=>{
        // show()
    },[])

    
  return (
    <div>
        <center><b>CRUD Operation</b></center><br />
        <center>
        <form>
            <button type='button' onClick={show}>Display</button>
            <button type='button' onClick={insert}>Create</button>
            <button type='button' onClick={update} >Update</button>
            <button type='button' onClick={delect}>Delete</button>
            {/* <input type="text" /> */}
        </form><br /><br />
        </center>
        <table>
            <tr>
                <th>userId</th>
                <th>ID</th>
                <th>Title</th>
                <th>body</th>
            </tr>
            {dataStore.map((item,index)=>{
                return(
                <tr key={index}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr> 
            )})}
        </table>

    </div>
  )
}

export default CRUD