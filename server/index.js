import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import memoryRouter from './routers/memoryRouters.js'



dotenv.config()
const app = express(); 

app.use('/memories', memoryRouter); 

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URI,  {
        useNewUrlParser:true,
        useUnifiedTopology:true,        
    })
    .then(() => console.log('database connection is successfully established'))
    .catch((err) => console.error(err))
})
