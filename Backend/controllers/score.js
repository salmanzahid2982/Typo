const core=require("../models/score");
exports.userCreate=(req,res)=>
{
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