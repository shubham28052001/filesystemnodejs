const express=require("express")
const app=express()

app.set("view engine","ejs");

// app.get("/profile/:username",function(req,res){     // route me  username ke jagah jo type karenge bo aajyega
//     res.send(`${req.params.username} ki profile`)
// })

//  app.get("/profile/:username",function(req,res){
//    res.render("index",{name :req.params.username})
// })    // ejs me name ke jagah jo type karenge bo change hoga 

const arr=[
    {name:"Rahul",age:25},
    {name:"Rohan",age:26},
    {name:"Rahul",age:25},
]
app.get("/profile",function(req,res){
    res.render("index",{person:arr})
})

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
    console.log("start server");    
})