const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Validationschema = require("../Validation");

// for error handling in JOi if something is missing
const UserValidation =(req,res,next)=>{
   const {error} = Validationschema.validate(req.body);
   if(error){
   const result = error.details.map(el=>el.message);
    console.log(result);
    return res.status(400).json(result);
   }
   else{
    next();
   }
}

router.post("/createuser",UserValidation,async(req,res)=>{
   const {name, password, email, location} = req.body;
    try{
        const UserData = new User({ 
            name:name,
            password:password, 
            email:email,
            location:location,
            // ...req.body   
         });

         console.log(UserData);
         await UserData.save();
        //  res.send("User Created...");
        res.json("User Created");
    }catch(err){
        console.log(err);
    };
    
})

module.exports = router;