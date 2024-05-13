const express=require('express')
const app=express();
const PORT=3000;
app.get("/",(req,res)=>{
    res.send(
        `<div>
           <h2>Welcome to the application
         </div>`
    );
}).listen(PORT)
console.log("Server is Running...")