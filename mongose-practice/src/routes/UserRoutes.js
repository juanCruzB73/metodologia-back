const express = require('express');
const User = require('../modals/User');
const { json } = require('body-parser');

const router = express.Router();

router.get('/',async(req,res)=>{
    try {
        const users=await User.find();
        res.json({
            ok:true,
            users:users,
        })
    } catch (error) {
        res.status(500).json({message:`There was an error${error}`});
    }   
})
router.post('/',async(req,res=response)=>{
    const {name,lastname,age}=req.body;
    try {
        if(!name || !lastname || !age){
            return res.status(400,json({message:"Some of the data is wrong"}))
        }
        const userData=new User({name,lastname,age});
        const userSaved = await userData.save();
        return res.status(201).json(userSaved);
    } catch (error) {
        res.status(500).json({message:`There was an error${error}`});
    }
})
module.exports=router