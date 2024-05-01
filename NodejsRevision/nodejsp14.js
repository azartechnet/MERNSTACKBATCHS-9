for(i=0;i<=5;i++)
{
    setTimeout(()=>{
       console.log("Inside setTimeout")
    },3000)
    console.log(`I'm number ${i}`);
}
console.log('Printed Immediately..')