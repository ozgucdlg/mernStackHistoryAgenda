import { FETCH_ALL,CREATE,UPDATE,DELETE } from '../constants/actionsConstants.js';

export default (memories = [], action)=>{
    switch(action.type){
      case FETCH_ALL: 
        return action.payload 

      case CREATE:  
        return [...memories, action.payload]
       
      case UPDATE: 
      return   memories.map((memory) => 
      memory._id === action.payload._id ? action.payload : memory)

        case DELETE : 
        return memories.filter((memory) => memory._id !== action.payload)
        
        
      default: 
        return memories
    }
}