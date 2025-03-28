import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })


export const fetchMemories = async () => API.get('/memories')

export const fetchMemory = async (id) => API.get(`/memories/${id}`)



export const createMemory = async (newMemory) =>{
   
   return await API.post('/memories', newMemory )
  
}


export const updateMemory = async (id, updatedMemory) => {
   return await API.put(`/memories/${id}`, updatedMemory)
}

export const deleteMemory = async (id) =>  await API.delete(`/memories/${id}`)

