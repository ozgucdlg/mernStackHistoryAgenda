import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config()

const app = express();


app.get('/', (req, res) => {
    console.log(req.url);
   res.json({ message: 'hi how a u'})
}) 
 

app.listen(process.env.PORT, () => {
    console.log(`everything is running  on ${process.env.PORT}`)
})
