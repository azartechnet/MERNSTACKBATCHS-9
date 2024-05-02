const EventEmitter=require('events');

var e2=new EventEmitter();

var fun1=(msg)=>{
    console.log("fun1:"+msg);
}
var fun2=(msg)=>{
     console.log(  "fun2:" + msg ); 
}
//Register the fun1 and fun2
e2.on('myevent',fun1);
e2.on('myevent',fun2);

e2.emit('myevent','Hello World!')