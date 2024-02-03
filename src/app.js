const express=require("express");
const hbs=require("hbs");
const app=express();
const mongoose=require('mongoose');
const Details=require('./models/details.js')
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
        // Details.create(
        //     {
        //         brandName:"Portfolio",
        //         brandIconUrl:"https://tioitservices.bloodanytime.com/assets/img/favicon.png",
        //         links:[
        //             {
        //                 label:"Home",
        //                 url:"/"
        //             },
        //             {
        //                 label:"About",
        //                 url:"/"
        //             },
        //             {
        //                 label:"Gallery",
        //                 url:"/gallery"
        //             },
        //         ],
        //         dropdownLabel:"Services",
        //         dropdown:[
        //             {
        //                 label:"Website Development",
        //                 url:"#"
        //             },
        //             {
        //                 label:"Graphic Designing",
        //                 url:"#"
        //             },
        //             {
        //                 label:"College Projects",
        //                 url:"#"
        //             },
        //         ]
        //    }
        // )
    })
    .catch((error)=>{
        console.error("Error connecting to Database: ",error);
    });

app.listen(process.env.PORT || 2000,()=>{
    console.log("Server Started");
});
