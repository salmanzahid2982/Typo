const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const loginSchema=new mongoose.Schema(
    {
        email:{type:String,required:true},
        password:{type:String}
    },
    { timestamps: true }
)

module.exports=mongoose.model("User",loginSchema);