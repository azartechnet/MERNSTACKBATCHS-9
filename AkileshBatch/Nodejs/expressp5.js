const express=require('express')
const app=express()
const PORT=3000;

//Single Routing

const router=express.Router();

router.get("/",function(req,res,next){
    console.log("Router working")
    res.end()
})
app.use(router)

app.listen(PORT,function(err){
    if (err) console.log(err);
    console.log(`Server is running at port ${PORT} `)
    });