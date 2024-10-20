const http=require("http");

// const server=http.createServer(function(req,res){
//     res.end("bade bhaiya")
// }) // this is create a server
const server=http.createServer(function(req,res){
    if(req.url==="/"){
        res.end("welcome to home page")
    }
    else if(req.url==="/about"){
        res.end("welcome to about page")
    }
    else if(req.url==="/contact"){
        res.end("welcome to contact page")
    }
    else{
        res.end("404 page not found")
    }
})
server.listen(3000,function(err){
    if(err){
        console.log("error");  
    }
    else{
        console.log("running on server");
        
    }
}); // port