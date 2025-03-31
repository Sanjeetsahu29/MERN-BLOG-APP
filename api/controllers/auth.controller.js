import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
export const signup = async (req, res)=>{
    const {username, email, password} = req.body;
    if(!username ||!email ||!password || username.trim() === '' || email.trim() === '' || password.trim() === ''){
        return res.status(400).json({msg: 'Please enter all fields'});
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
        console.error(err);
        res.status(500).json({msg:err.message});
    }

}