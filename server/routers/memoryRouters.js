import express from "express";

import Memory from '../db/memoryModel.js'




const router = express.Router()

// read
router.get('/', async (req,res)=>{
   try {
    const memories= await Memory.find()
    res.status(200).json(memories)
   } catch (error) {
       res.status(404).json({message: error.message})
       
   }
})

router.get('/:id', async(req,res) =>{
    res.json({messaje:'get a single memory from database'})
})

//create 
router.post('/', async(req,res) =>{
    res.json({message:'create a memory'})
})

// update
router.put('/', async(req,res) =>{
    res.json({message:'update a memory'})
})

router.delete('/', async(req,res) =>{
    res.json({message:'delete a memory'})
})






export default router