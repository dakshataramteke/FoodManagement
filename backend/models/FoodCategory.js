
const mongoose = require("mongoose");

const FoodCategorySchema = new mongoose.Schema({
  CategoryName:{
    type:String
 }
});

const FoodCategory = mongoose.model('foodCategory', FoodCategorySchema);
module.exports = FoodCategory;