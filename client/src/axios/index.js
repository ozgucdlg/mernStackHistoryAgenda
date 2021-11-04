import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' })


export const fetchMemories = async () => API.get('/memories')

export const fetchMemory = async (id) => API.get(`/memories/${id}`)



export const createMemory = async (newMemory) =>{
   
   const { data } = await API.post('/memories', newMemory )
   console.log(data)
}


export const updateMemory = async (id, updatedMemory) => {
   await API.put(`/memories/${id}`,updatedMemory)
}

export const deleteMemory = async (id) =>  await API.delete(`/memories/${id}`)

