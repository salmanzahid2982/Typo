const { response } = require("express");
const User=require("../models/login.js")
const { check, validationResult } = require('express-validator');
const { json } = require("body-parser");
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

exports.signup=(req,res)=>
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
                err:"Not able to save user in DB"
            });
        };
        // console.log(user);
        return res.json({   
                email:user.email,
                password:user.password,
                id:user._id}
            );   
    });
};

exports.signin=(req,res)=>{
    const {email,password}=req.body;
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(422).json({
            error:errors.array()[0].msg
        });
    }   
    User.findOne({email},(err,user)=>{
        if(err||!user){
            return res.status(400).json({error:"User doesnot exist"});
        }
        if(!user.autheticate(password))
        {   
            return res.status(401).json({
                error:"Email and password do not match"
            });
        }
        //create token
        const token=jwt.sign({_id:user._id},"trynotpanic");
        res.cookie("token",token,{expire:new Date()+ 9999});

        //send response to our frontend
        const {_id,email,role}=user;
        return res.json({token,user:{_id,email,role}});
    })
}

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
    