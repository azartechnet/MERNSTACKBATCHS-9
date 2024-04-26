var h1=require('http')
h1.createServer(function(req,res){
    res.writeHead(200);
    res.end("Helloworld")
}).listen(8081);
console.log("server is running at http://localhost:8081");