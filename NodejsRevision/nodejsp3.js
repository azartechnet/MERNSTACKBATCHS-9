const EventEmitter=require('events')
var e1=new EventEmitter()
e1.on("id1",(msg)=>{
    console.log(`Event id1 ${msg}`)
})
e1.emit('id1',"HelloWorld")