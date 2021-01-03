const { response } = require("express");
const User=require("../models/login.js")
const { check, validationResult } = require('express-validator');


exports.userCreate=(req,res)=>
{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }

    const user=new User(req.body)
    console.log("This is the user:",req.body)
    user.save((err,user)=>
    {  
        if(err){
            return res.status(400).json({
                error:err
            });
        };
        console.log(user);
        
        return res.json(user);   
         
    });
};

exports.userFetch=(req,res)=>{
    const {email}=req.body;
    User.findOne({email},(err,user)=>{
        if(err){
            return res.status(400).json({
                error:"No User Found"
            })
        }
        return res.json(user);
    });
}

exports.userFetchAll=(req,res)=>{
    User.find().exec((err,user)=>{
        if(err){
            return res.status(400).json({
                error:"NO User found"
            })
        }
        return res.json(user);
    });
}
    