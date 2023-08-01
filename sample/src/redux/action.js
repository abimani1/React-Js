export const getData=(data)=>{
    console.warn("action is call",data);
    return {
        type:"GET_DATA",
        data
    }
}

export const editData=(data)=>{
    console.warn("edit action call");
    return{
        type:"EDIT_DATA",
        data
    }
}