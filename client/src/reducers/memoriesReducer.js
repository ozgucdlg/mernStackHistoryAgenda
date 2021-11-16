import { FETCH_ALL } from '../constants/actionsConstants.js';

export default (memories = [], action)=>{
    switch(action.type){
      case FETCH_ALL: 
        return action.payload 
        
      default: 
        return memories
    }
}