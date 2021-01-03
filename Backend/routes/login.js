const express=require("express");
const { check, validationResult } = require('express-validator');
const router=express.Router();

const {userCreate, userFetchAll,userFetch}=require("../controllers/login");
const User=require("../models/login")

router.post("/signup",
[check("password","password should atleast 3 characters").isLength({min:3})],
[check("email","email required").isEmail()],
userCreate);

router.get("/login/auth",userFetch);

router.get("/login",userFetchAll);

module.exports=router;