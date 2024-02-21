// setInterval(()=>{
// console.log("Welcome")
// },1000)

// let count=0;
// const intervalId=setInterval(()=>{
//     console.log("Welcome")
//     count++;
//     if(count==5){
//         clearInterval(intervalId);
//         }
// },2000)

let count=0;
const intervalId=setInterval((a,b)=>{
    console.log(`This is ${a} and I am ${b}`);
},3000,"John", "Doe");
    console.log("Welcome")
    count++;
    if(count==5){
        clearInterval(intervalId);
        }
