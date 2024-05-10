const e1=require('express')
const app=e1();
const PORT=3000;
app.get('/',(req,res)=>{
     res.send("Welcome")
}).listen(PORT)
console.log("Server is Running...");