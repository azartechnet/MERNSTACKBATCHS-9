var f1=require('fs')
f1.rename('sample.txt','sample1.txt',function(err){
    if(err) throw err
    console.log("File Renamed")
})