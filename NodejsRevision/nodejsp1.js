var h1=require('http')
h1.createServer(function(req,res){
    res.writeHead(200);
    res.end("Hello World\n");
}).listen(4000)
console.log("Server is Running..")