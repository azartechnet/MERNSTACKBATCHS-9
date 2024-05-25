const cookieParse=require('cookie-parser')
const express=require('express')
const app=express()
const PORT=3000;

app.use(cookieParse())

app.get('/',function(req,res){
    res.cookie('name','sachin')
    res.send('cookie set')

}).listen(3000)
console.log("Server is Running..")