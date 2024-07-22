var fs=require('fs')
//Synchrous Read
var data=fs.readFileSync('sample1.txt')
console.log(data.toString())

//Asynchrous read with callback function

fs.readFile('sample1.txt',function(err,data){
    if(err)
    console.log(err)
console.log(data.toString())
})