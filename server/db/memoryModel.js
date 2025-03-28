import mongoose from 'mongoose'

const memoSchema = mongoose.Schema({ 
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
    collection: 'memos'  // Use the existing collection name
}) 

const Memory = mongoose.model('Memory', memoSchema)

export default Memory