const mongoose=require('mongoose');

const Contact=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    city:String,
    state:String,
    zip:String,
    message:String
})

module.exports=mongoose.model("queries",Contact);
