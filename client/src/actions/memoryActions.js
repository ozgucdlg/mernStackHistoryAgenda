import { FETCH_ALL } from '../constants/actionsConstants.js';

import * as api from  '../axios'

export const fetchMemories = () => async (dispatch) => {
    try {
        const {data} = await api.fetchMemories();
        dispatch({type:FETCH_ALL,payload:data});

    } catch (error) {
        console.error(error);
    }
}


