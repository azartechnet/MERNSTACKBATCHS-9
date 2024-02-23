// printStatement=()=>{
//     console.log("Printed after 3 seconds")
// }
// setTimeout(printStatement,3000);
// console.log("Printed Immediately")

// for(i=1;i<=5;i++)
// {
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// }
// console.log("Printed Immediately")

function mymethod()
{
    return 123;
}
console.log(mymethod())
setTimeout(function(){
    console.log('Printed After 3 Seconds')
},3000)
console.log("Waiting..")