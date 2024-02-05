const mongoose=require('mongoose');
const Gallery=mongoose.Schema({
    imgUrl:String
})

module.exports=mongoose.model("gallery",Gallery);