import { FETCH_ALL,DELETE,CREATE,UPDATE } from '../constants/actionsConstants.js';

import * as api from  '../axios/index'

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

export const deleteMemory = (id)=> async (dispatch) =>{
    try {
        await api.deleteMemory(id)
        dispatch({ type:DELETE, payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const updateMemory = (id, updatedMemory) =>async (dispatch)=>{
    try {
        const {data} = await api.updateMemory(id, updatedMemory)
        dispatch({type:UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}


