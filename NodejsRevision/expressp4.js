const express=require('express')
const app=express()
const PORT=3000;

app.use(express.json())

app.post("/",function(req,res){
    console.log("received post request")
    console.log(req.body.name)
    res.end()
})

app.listen(PORT,function(err){
    if (err) throw err

    else console.log(`server is running on
    http://localhost:${PORT}`)
})