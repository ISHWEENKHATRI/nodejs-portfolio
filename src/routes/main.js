const express=require('express');
const Detail=require("../models/details.js")
const Slider=require('../models/slider.js')
const Service=require('../models/service.js')
const Contact=require('../models/contact.js');
const routes=express.Router();

routes.get("/", async (req,res)=>{
    const details= await Detail.findOne({"_id":"65be86cef1fce20c6a392d95"})
    const slides= await Slider.find();
    const services=await Service.find();
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    });
})
routes.get("/gallery",async(req,res)=>{
    const details= await Detail.findOne({"_id":"65be86cef1fce20c6a392d95"})
    res.render("gallery",{
        details:details
    });
})

routes.post("/contact-form", async (req,res)=>{
    // console.log(req.body);
    //save the data in db
    try{
        const data=await Contact.create(req.body)
        console.log(data)
        res.redirect("/")
    }catch(e)
    {
        console.log(e)
        res.redirect("/")
    }
})

module.exports=routes;