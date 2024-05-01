let count=0
const intervalId=setInterval(()=>{
    if(count===15){
        clearInterval(intervalId)
        console.log('Time is up!')
    }else{
        const now = new Date();
         const hours = now.getHours();
         const minutes = "0" + now.getMinutes();
         const seconds = "0" + now.getSeconds();  
         const time = `${hours}:${minutes.slice(-2)}:${seconds.slice(-2)}`;  
         
         console.log(`It's ${time}`); 
         count++
     }
},1000)
