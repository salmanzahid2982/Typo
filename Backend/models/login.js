const mongoose = require("mongoose");
const crypto = require('crypto');
const uuidv1=require('uuid/v1');
const { ObjectId } = mongoose.Schema;

const loginSchema=new mongoose.Schema(
    {
        email:{type:String,required:true},
        encry_password:{type:String,require:true},
        score:{type:String},
        salt:String,
        role:{
            type:Number,
            default:0
        }
    },
    { timestamps: true }
)

loginSchema.virtual("password")
    .set(function(password){
        this._password=password;
        this.salt=uuidv1();
        this.encry_password=this.securePassword(password)
    })
    .get(function(){
        return this._password
    })

loginSchema.methods={
    
    autheticate:function(plainpassword){
        return this.securePassword(plainpassword) === this.encry_password
    },

    securePassword:function(plainpassword){
        if(!plainpassword) return "";
        try{
            return crypto.createHmac('sha256', this.salt)
            .update(plainpassword)
            .digest('hex');
        }
        catch(err) {
            return "";
        }
    }
}

module.exports=mongoose.model("User",loginSchema);