import { FETCH_ALL,DELETE,CREATE,UPDATE } from '../constants/actionsConstants.js';

import * as api from  '../axios'

export const fetchMemories = () => async (dispatch) => {
    try {
        const {data} = await api.fetchMemories();
        dispatch({type:FETCH_ALL,payload:data});

    } catch (error) {
        console.error(error);
    }    
}

export const createMemory = (memory) => async dispatch => {

    try {
        
        const {data } = await api.createMemory(memory)
        dispatch({ type:CREATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}


