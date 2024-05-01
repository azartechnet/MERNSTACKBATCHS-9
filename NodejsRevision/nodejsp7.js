var fs=require('fs')
fs.writeFile('input.txt',"Welcome to the Application",function(err) {
    if(err)throw err;
    console.log("Data written");
    fs.readFile('input.txt',function(err,data){
        if(err)throw err;
        let str = data.toString();
        console.log(str);
    })
})
