var fs=require('fs')
fs.writeFile('input.txt',"Welcome to the Application",function(err){
if(err)throw err;
console.log("DataWritten Sucess!!")
fs.readFile('input.txt','utf8',function read(err,data){ 
    if (err) throw err;
     console.log(`The file contains ${data}`);   // printing data in utf8 format
});
});