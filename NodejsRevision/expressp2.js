const express=require('express')
const  app=express();
app.get("/",function(req,res){
    res.type('text/plain');
    res.status(200)
    res.send('Welcome')
});
app.listen(3000,function(){
    console.log("Server is running on port 3000");
})