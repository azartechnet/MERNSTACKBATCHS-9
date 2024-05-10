const express=require('express')
const app = express();
const PORT=3000;
app.use(express.text())

app.post("/",function(req,res){
    console.log(req.body)
    res.end()
}).listen(PORT)
console.log("Server is Running...")