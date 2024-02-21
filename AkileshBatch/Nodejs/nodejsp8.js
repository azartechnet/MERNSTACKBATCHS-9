
var http=require('http')
var uc=require('upper-case')
http.createServer(function(req,res){
    res.writeHead(200)
    res.write(uc.upperCase("welcome"))
   
}).listen(8080,'localhost',()=>{console.log("server is running")})

