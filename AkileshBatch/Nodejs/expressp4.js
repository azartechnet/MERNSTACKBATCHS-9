const express=require('express')
const app=express()
const PORT=3000
app.use(express.raw())
app.post("/",function(req,res){
    console.log(req.body)
    res.send(`Your value is::${req.body}`);
    res.end()
}).listen(PORT)
console.log("Server is Running...")
