const express=require('express')
const app=express()
const PORT=3000

//Multiple Routing

const r1=express.Router();
const r2=express.Router();
const r3=express.Router();

r1.get("/user",function(req,res){
    console.log("UserRouting")
})
r2.get('/product', function (req, res) {
   console.log('Product Route'); 
   });
r3.get("/admin",function(req,res){
    console.log("AdminRoute");
});
app.use(r1);
app.use(r2);
app.use(r3);

app.listen(PORT,function(req,res){
    console.log(`Server is running at port ${PORT}`)
})