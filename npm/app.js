const express=require("express")
const app=express()
app.get("/",function(req,res){
    res.send("this is home page")
})
app.get("/about",function(req,res){
    res.send("this is about page")
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})