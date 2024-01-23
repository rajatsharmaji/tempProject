import User from './user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const addUserService = async(req,res)=>{
    try{
    const password = req.body.password;
    const hashPassword = await bcrypt.hash(password,10);
    const newUser = await new User({
      name: req.body.name,
      password: hashPassword,
      age: req.body.age,
    });

    await newUser.save();
    res.json({msg:'User added successfully',user: newUser})
  } 
  catch{(e)=>console.log(e);}
  }


  export const getUser = async(req,res) => {
     const userList = await User.find()
     res.json(userList)
  }
  
  export const getUserByName = async(req,res) => {
    const user = await User.find(req.params)
    res.send(user)
 }
