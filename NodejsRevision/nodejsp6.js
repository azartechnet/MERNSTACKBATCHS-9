var fs=require('fs')
//Synchrous read
var data=fs.readFileSync('sample1.txt')
console.log(data.toString())

//Asynchronous read with callback function
fs.readFile('sample1.txt',function (err,data) {
    if(err){
        return console.error(err);
    }
    console.log("The file content is "+data.toString());
});