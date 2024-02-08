const express=require("express");
const hbs=require("hbs");
const app=express();
const mongoose=require('mongoose');
const Details=require('./models/details.js')
const Slider=require('./models/slider');
const Service=require("./models/service.js")
const bodyParser=require('body-parser');
const Gallery=require('./models/gallery.js')
const routes=require('./routes/main');

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static("public"));
app.use('',routes);

// Define a custom helper to get the current year
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

//(template engine)
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials")

//db connection
mongoose.connect("mongodb://localhost/nodejs_portfolio")
    .then(()=>{
        console.log("Database Connected");
        // Gallery.create(
        //     [
        //         {
        //             imgUrl:'https://imageio.forbes.com/specials-images/imageserve/6200b0dddcf32d3be937fa84/The-5-Technologies-That-Will-Change-The-Future-Of-The-Human-Race/960x0.jpg?height=399&width=711&fit=bounds'
        //         },
        //         {
        //             imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbFT50fetX0fpGDIl-TGaptbKNfLcyLRHftdl52MLzC-7wAaA7z_B8wa7WBwkgCj_3oI&usqp=CAU'
        //         },
        //         {
        //             imgUrl:'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?height=399&width=711&fit=bounds'
        //         },
        //         {
        //             imgUrl:'https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg'
        //         },
        //         {
        //             imgUrl:'https://img.freepik.com/premium-photo/map-with-lights-it_81048-33138.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701475200&semt=ais'
        //         },
        //         {
        //             imgUrl:'https://media.istockphoto.com/id/1201596127/vector/industry-4-0-fourth-industrial-revolution-digitalization-of-modern-business-process-and.jpg?s=612x612&w=0&k=20&c=L_bYUcyf-CfsfinMseydPigioVSeWDjNBSDExpVYIa8='
        //         },
        //         {
        //             imgUrl:'https://media.istockphoto.com/id/968113166/photo/smart-house-concept-communication-network-of-residence-energy-management-system-iot-ai.jpg?s=612x612&w=0&k=20&c=JMeM0r_J0T7XkS6cjggzsmFTKcdH1T0purpv2zCYmH8='
        //         },
        //         {
        //             imgUrl:'https://media.istockphoto.com/id/1259094551/photo/compliance-rule-law-and-regulation-graphic-interface-for-business-quality-policy.jpg?s=612x612&w=0&k=20&c=dSN_KVbaF1N1O4KyHPH2Hk_mUUfKFDwe1r3srVMi218='
        //         },
        //         {
        //             imgUrl:'https://www.shutterstock.com/image-photo/two-business-people-working-together-260nw-1776722432.jpg'
        //         }
        //     ]
        // )
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
