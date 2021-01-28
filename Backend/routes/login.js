const express=require("express");
const { check, validationResult } = require('express-validator');
const router=express.Router();

const {signup, userFetchAll,signin}=require("../controllers/login");
const User=require("../models/login")

router.post("/signup",
[check("password","password should atleast 3 characters").isLength({min:3})],
[check("email","email required").isEmail()],
signup);

router.post("/signin",
[check("password","password should atleast 3 characters").isLength({min:3})],
[check("email","email required").isEmail()],
signin);

//router.post("/score",scoreCreate)

router.get("/login",userFetchAll);

module.exports=router;