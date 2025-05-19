const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {Validationschema,LoginSchema} = require("../Validation");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = "FoodDeliveryApp"

// for error handling in JOi if something is missing
const UserValidation = (req, res, next) => {
  const { error } = Validationschema.validate(req.body);
  if (error) {
    const result = error.details.map((el) => el.message);
    console.log(result);
    return res.status(400).json(result);
  } else {
    next();
  }
};

const LoginValidation = (req, res, next) => {
  const { error } = LoginSchema.validate(req.body);
  if (error) {
    const result = error.details.map((el) => el.message);
    console.log(result);
    return res.status(400).json(result);
  } else {
    next();
  }
};

router.post("/createuser", UserValidation, async (req, res) => {
  const { name, email, location } = req.body;
  const salt = await bcrypt.genSalt(10);
  console.log("Salt is ", salt);

  let secPassword = await bcrypt.hash(req.body.password, salt)
  try {
    const UserData = new User({
      name: name,
      password: secPassword,
      email: email,
      location: location,
      // ...req.body
    });

    console.log(UserData);
    await UserData.save();
    //  res.send("User Created...");
    res.json("User Created");
  } catch (err) {
    console.log(err);
  }
});

router.post("/loginuser", LoginValidation, async (req, res) => {
  try {
    const email = req.body.email;
    const UserData = await User.findOne({ email });
    if (!UserData) {
      return res.status(400).json({ success: false, message: "Try to Login" });
    }
    const pwdCompare = await bcrypt.compare(req.body.password, UserData.password)
    if (!pwdCompare) {
      return res.status(400).json({ success: false, message: "Password is Incorrect" });
    }

    const data = {
        user:{
            id: UserData.id
        }
    }
    const authToken = jwt.sign(data, jwtSecret)
    res.json({ success: true, authToken:authToken,message: "Login Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


module.exports = router;
