var fs=require('fs')
fs.readFile('sample1.txt',function(err,d1){
    if(err)
    console.log(err)
else
console.log(d1.toString())
})