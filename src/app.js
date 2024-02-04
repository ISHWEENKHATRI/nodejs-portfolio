const express=require("express");
const hbs=require("hbs");
const app=express();
const mongoose=require('mongoose');
const Details=require('./models/details.js')
const Slider=require('./models/slider');
const Service=require("./models/service.js")
const bodyParser=require('body-parser');
const routes=require('./routes/main');

app.use(bodyParser.urlencoded({
    extended:true
}))
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
        // Service.create(
        //     [
        //     {
        //         icon:'fa-solid fa-code',
        //         title:'Website Development',
        //         linkText:'View more',
        //         linkUrl:'#'
        //     },
        //     {
        //         icon:'fa-solid fa-code',
        //         title:'College Projects',
        //         linkText:'View more',
        //         linkUrl:'#'
        //     },
        //     {
        //         icon:'fa-solid fa-code',
        //         title:'Graphic Desiging',
        //         linkText:'View more',
        //         linkUrl:'#'
        //     },
        //     {
        //         icon:'fa-solid fa-code',
        //         title:'App Development',
        //         linkText:'View more',
        //         linkUrl:'#'
        //     },
        //     {
        //         icon:'fa-solid fa-code',
        //         title:'IoT Projects',
        //         linkText:'View more',
        //         linkUrl:'#'
        //     },
        //     {
        //         icon:'fa-solid fa-code',
        //         title:'SEO Optimization',
        //         linkText:'View more',
        //         linkUrl:'#'
        //     },
        // ]
        // )
        
        // Slider.create(
        //     [
        //         {
        //             imageUrl:"/images/s1.png"
        //         },
        //         {
        //             imageUrl:"/images/s2.png"
        //         },
        //         {
        //             imageUrl:"/images/s3.png"
        //         }     
        //     ]
        // )
        
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
