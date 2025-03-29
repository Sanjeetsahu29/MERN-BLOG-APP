import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
mongoose.connect(
    process.env.MONGO_URI
).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err));
const PORT = process.env.PORT || 2000;
app.listen(process.env.PORT, async() =>{
    console.log(`Server is running on port:${PORT}`);
});