import { FETCH_ALL,CREATE,UPDATE,DELETE } from '../constants/actionsConstants.js';

export default (memories = [], action)=>{
    switch(action.type){
      case FETCH_ALL: 
        return action.payload 

      case CREATE:  
        return [...memories, action.payload]
        
      default: 
        return memories
    }
}