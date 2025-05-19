// const { required } = require("joi");
const mongoose = require("mongoose");
const FoodCategory = require("./FoodCategory");
const Schema = mongoose.Schema;

const FoodItemsSchema = new Schema({
  CategoryName: {
    type:Schema.Types.ObjectId,
      ref: "foodCategory"   
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
 
  description: {
    type: String,
  },
});

const FoodItems = mongoose.model("food_items", FoodItemsSchema);

module.exports = FoodItems;

