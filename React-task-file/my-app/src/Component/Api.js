import axios from "axios";

export const Getdata=async()=>{
    try{
        return await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    }catch(error){
        console.log(error);
    }
}