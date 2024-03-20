const express=require('express')
const app=express()
app.use(express.json())
app.post("/",(req,res)=>{
    const  name = req.body.name;
    if(!name) return res.send("Welcome")
    
    //console.log(req.body);
    console.log(`Your name is:: ${name}!`);
}).listen(3000)
console.log("Server is Running..")
