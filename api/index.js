import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
import {test} from './controllers/user.controller.js'
import userRoutes from './routes/user.route.js';
const app = express();

app.use(express.json());
dotenv.config();
mongoose.connect(
    process.env.MONGO_URI
).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err));
const PORT = process.env.PORT || 2000;
app.listen(process.env.PORT, async() =>{
    console.log(`Server is running on port:${PORT}`);
});

app.get('/test',test)
app.use('/api/user', userRoutes);