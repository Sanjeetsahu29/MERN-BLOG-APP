import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
import {test} from './controllers/user.controller.js'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
const app = express();

app.use(express.json());
dotenv.config();
mongoose.connect(
    process.env.MONGO_URI
).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err));
const PORT = process.env.PORT || 2000;
app.listen(PORT, async() =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);