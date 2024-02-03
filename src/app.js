const express=require("express");
const hbs=require("hbs");
const app=express();
const mongoose=require('mongoose');
const routes=require('./routes/main');

app.use(express.static("public"));
app.use('',routes);

//(template engine)
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials")

//db connection
mongoose.connect("mongodb://localhost/nodejs_portfolio")
    .then(()=>{
        console.log("Database Connected");
    })
    .catch((error)=>{
        console.error("Error connecting to Database: ",error);
    });

app.listen(process.env.PORT || 2000,()=>{
    console.log("Server Started");
});
