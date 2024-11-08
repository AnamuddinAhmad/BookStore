const express = require("express");
const app = express();


require("dotenv").config();

//Mongoose Connection
const mongooseConnection = require("./config/mongooseConnection");

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("App is working...")
})

app.listen(process.env.PORT,()=>{
    console.log("Server is listening on ",process.env.PORT);
    
})