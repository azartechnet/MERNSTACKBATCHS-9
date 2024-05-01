var fs=require('fs')
fs.readFile('sample1.txt',function(err,d1){
    if(err)
    {
        return console.err(err);
    }
    console.log('Asynchrounous read::'+d1.toString());
})