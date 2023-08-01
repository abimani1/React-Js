export const getData=(data=[],action)=>{
    switch(action.type){
        case "GET_DATA":
            console.warn('render',action);
            return action.data
        case "EDIT_DATA":
            console.warn('render edit',action);
            return action.data
        default:
            return 'not renter'
    }
}