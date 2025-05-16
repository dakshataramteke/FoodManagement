const express = require("express");
const MongoConnection = require("./models/db");
const CreateUser = require("./Routes/CreateUser");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api", CreateUser);

app.get("/",(req,res)=>{
    res.send("Welcome");
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})