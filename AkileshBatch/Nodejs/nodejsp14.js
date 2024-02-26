var fs=require('fs')
var rs=fs.createReadStream('sample1.txt')
rs.on("data",function(c1){
    console.log("File is::"+c1)
})