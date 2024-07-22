var fs=require('fs')
fs.writeFile('sample2.txt',"Welcome to the Application",function(err){
    if(err)
    console.log(err)
else
console.log("File Created")
})
fs.readFile('sample2.txt',function(err,data){
    if(err)
    console.log(err)
else
console.log(data.toString())
})