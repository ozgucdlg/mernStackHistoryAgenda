import express from 'express'
import mongoose from 'mongoose'

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


// GET SINGLE ID FROM DATABASE
router.get('/:id', async(req,res) =>{
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message:'Memory is not valid'})
        const memory =  await Memory.findById(id)
        if(!memory) return
            res.status(200).json(memory)               
        }
        
    } catch (error) {
        res.status(404).json({message:'Memory not found'})
        
    }
})

//create 
router.post('/', async(req,res) =>{
    try {
        const memory = req.body
        const createdMemory = await Memory.create(memory)
        res.status(201).json(createdMemory)
    } catch (error) {
        res.status(404).json({message:'create memory fail'})
    }
})

// update
router.put('/:id', async(req,res) =>{
   try {
       const {id} = req.params
       if(!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({message:'id is not valid'})
       const {title,content,creator, image} = req.body
       const updatedMemory= await Memory.findByIdAndUpdate(id, {title,content,creator,image, _id:id},{new:true})
       res.status(200).json(updatedMemory)  

   } catch (error) {
       console.log(error.message)
       res.json({message:'update fail'})
       
   }
})

router.delete('/:id', async (req,res) =>{
    try {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message:'memory id is not valid'})

        await Memory.findByIdAndDelete(id)
        res.status(200).json({message:'memory has been deleted'})    
        }        
    } catch (error) {
        console.log(error.message)
        res.json({message:'memory delete fail'})
        
    } 

})






export default router