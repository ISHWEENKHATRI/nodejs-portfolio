const mongoose=require('mongoose')
const Service=mongoose.Schema({
    icon:String,
    title:String,
    linkText:String,
    linkUrl:String
})

module.exports=mongoose.model("services",Service);