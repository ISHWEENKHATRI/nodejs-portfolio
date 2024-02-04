const express=require('express');
const Detail=require("../models/details.js")
const Slider=require('../models/slider.js')
const routes=express.Router();

routes.get("/", async (req,res)=>{
    const details= await Detail.findOne({"_id":"65be86cef1fce20c6a392d95"})
    const slides= await Slider.find()
    // console.log(details);
    res.render("index",{
        details:details,
        slides:slides
    });
})
routes.get("/gallery",async(req,res)=>{
    const details= await Detail.findOne({"_id":"65be86cef1fce20c6a392d95"})
    res.render("gallery",{
        details:details
    });
})

module.exports=routes;