const express=require('express')
const app = express();
const PORT=3000;

//Multiple Routing

const r1=express.Router();
const r2=express.Router();
const r3=express.Router();

r1.get("/user",function(req,res){
    res.send("User Page");
})
r2.get('/add', function (req,res){

    res.send("AddPage")
})
r3.get('/admin',function(req,res){
    res.send("Admin Page")
})
app.use("/user",r1);
app.use("/add",r2);
app.use("/admin",r3);

app.listen(PORT,function(err)
{
     if(err)console.log(err)
     console.log("Server is running..")
})

