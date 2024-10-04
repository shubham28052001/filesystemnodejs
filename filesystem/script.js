
/* 

var a=10;
 module.exports=a;
 console.log(a);

 
*/
// to create a file by using node js 

const fs = require("fs");

fs.writeFile("shubham.txt", "to kaise hai aap log", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("file ban chuki hai bhaiyo");
    }
});






//to read a file 


// const fs = require("fs")
// fs.readFile("./hello", "utf-8", function (err, data) {
//     if (err) {
//         console.log(err);

//     }
//     else {
//         console.log(data);

//     }
// })


// to update a file

// const fs=require("fs")
// fs.appendFile("./hello"," ram ram bhaiyo",function(err){
//    if(err){
//     console.log(err);
//    }
//    else{
//     console.log("done");
    
//    }
    
// })

//To rename file name

// const fs=require("fs")
// fs.rename("./hello","hello.txt",function(err){
//     if(err){
//         console.log(err); 
//     }
//     else{
//         console.log("file rename successfully");
    
//     }
// })

// to delete a ffile

// const fs=require("fs")
// fs.unlink("hello.txt",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("deleted");
        
//     }
// })

// to create a folder

// const fs=require("fs")
// fs.mkdir("hellofolder",function(err){
// if(err){
//     console.log(err);
    
// }
// else{
//     console.log("folder ban gaya");  
// }
// })

 // to read the folder

//  const fs =require("fs")
//  fs.readdir("hellofolder",function(err,files){
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log(files);
//     }
//  })

// to delete a folder

// const fs=require("fs")
// // fs.rmdir("hellofolder",function(err){ // this deleted only empty folder
// fs.rmdir("hellofolder",{
//     recursive:true // this deleted folder with all files
// },function(err){
// if(err){
//     console.log(err);
    
// }
// else{
//     console.log("folder deleted");
// }
// })


