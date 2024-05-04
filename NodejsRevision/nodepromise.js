const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("hai")},2000);
});
promise.then((val)=>{console.log(val)})

