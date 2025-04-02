import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import {errorHandler} from '../utils/error.js';
import jwt from 'jsonwebtoken';
export const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password || username.trim() === '' || email.trim() === '' || password.trim() === ''){
        return next(errorHandler(400, "All fields are required"));
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username, 
        email, 
        password:hashedPassword
    });
    try{
        const user = await newUser.save();
        res.status(201).json({msg: 'User registered successfully',user});
    }catch(err){
        return next(err)
    }
}

export const signin = async (req, res, next)=>{
    const {email, password} = req.body;
    if(!email || !password || email.trim() === '' || password.trim() === ''){
        return next(errorHandler(400, "All fields are required"));
    }
    try{
        const user = await User.findOne({email});
        if(!user){
            return next(errorHandler(400, "Invalid ceredentials"));
        }
        const isPasswordCorrect = bcryptjs.compareSync(password, user.password);
        if(!isPasswordCorrect){
            return next(errorHandler(400, "Invalid ceredentials")); 
        }
        const token = jwt.sign({
            id:user._id,
        },process.env.JWT_SECRET,{expiresIn:'1d'});

        const {password: pass, ...others} = user._doc;
        res.status(200).cookie('access_token',token,{
            httpOnly:true
        }).json(others);        
    }catch(err){
        return next(err)    
    }
}