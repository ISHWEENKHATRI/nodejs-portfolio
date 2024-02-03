const express=require('express');
const routes=express.Router();

routes.get("/",(req,res)=>{
    res.render("index");
})
routes.get("/gallery",(req,res)=>{
    res.send("This is a message from gallery.");
})

module.exports=routes;