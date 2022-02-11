import mongoose from 'mongoose'


const memoSchema = mongoose.Schema({ 
    title:{
        type: 'string',
        required: true,
    },
    content: {
        type: 'string',
        required: true,
    },
    creator: {
        type: 'string',
        required: true,
    },
    image: {
        type: 'string',
        multiple: true,
        
    },
    createdAt: {
        type: Date,
        default: new Date()
    }    
}) 

const Memory = mongoose.model('memo', memoSchema)

export default Memory