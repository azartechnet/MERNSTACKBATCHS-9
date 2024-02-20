var h1=require('http')
h1.createServer(function (req,res){
res.writeHead(200);
res.end("Welcome to nodejs application")
}).listen(8080)
console.log("Server is Running..")
