var f1=require('fs')
f1.open('sample.txt','w',function(err){
    if(err)throw err;
    console.log("Saved")
})