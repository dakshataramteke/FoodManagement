const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser",async(req,res)=>{
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