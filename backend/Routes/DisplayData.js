const express = require("express");
const db = require("../models/db");
const router = express.Router();
const FoodItems = require("../models/FoodItems");

router.get("/foodData",async(req,res)=>{
    // const {id} = req.body;
   const fooddata = await FoodItems.find({});
   console.log(fooddata);
   res.send(fooddata)
})
router.post("/foodData",async(req,res)=>{
 try{
res.send()
 }catch(err){
    console.log(err)
 }
})

module.exports = router;