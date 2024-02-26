var fs=require('fs')
fs.readFile('sample.txt',function(err,d1){
   if(err)
   {
    return console.error(err)
   } 
   console.log('Asy...'+d1.toString())
})