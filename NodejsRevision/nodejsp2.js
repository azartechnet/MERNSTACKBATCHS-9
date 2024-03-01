// setInterval(()=>{
//     console.log("This is an interval function");
// },1000)
// let count=0
// const intervalId=setInterval(()=>{
//     if(count==5){
//         clearInterval(intervalId);
//          }else {
//              console.log(`This is an interval function: ${++count}`); 
//          }
//         },2000)

printStatement=()=>{
    console.log("Printed after 3 seconds")
}
setTimeout(printStatement,3000)
console.log("Printed Immediately")