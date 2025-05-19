const express = require("express");
const MongoConnection = require("./models/db");
const CreateUser = require("./Routes/CreateUser");
const DisplayData = require("./Routes/DisplayData");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors("http://localhost:5173"));

app.use("/api", CreateUser);
app.use("/api", DisplayData);

app.get("/",(req,res)=>{
    res.send("Welcome");
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})