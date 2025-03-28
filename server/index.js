import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import memoryRouter from './routers/memoryRouters.js'
import userRouter from './routers/userRouters.js'

dotenv.config()
const app = express(); 

// Middleware
app.use(cors())
app.use(express.json({limit:'20mb'}))

// Routes
app.use('/memories', memoryRouter)
app.use('/user', userRouter)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ message: err.message || 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB successfully');
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.error('Failed to connect to MongoDB:', error);
}
