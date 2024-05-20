var express=require('express')
var app=express();
app.use(function(req,res,next){
    console.log("%s %s",req.method,req.url)
    next();
})
app.get("/",function(req,res,next){
    res.send("Welcome to the Application")
})
app.get("/help",function(req,res,next){
    res.send("Help Page")
}).listen(3000)

console.log("Server is Running...")