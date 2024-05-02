const EventEmitter=require('events')
var e2=new EventEmitter();
e2.on('id1',(msg)=>{
    console.log('Event recevied ',msg);
})
e2.emit('id1','Hello World');
