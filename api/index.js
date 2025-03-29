import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
mongoose.connect(
    process.env.MONGODB_URI,
).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err));
app.listen(5000, async() =>{
    console.log('Server is running on port 5000')
});