//Importing the events

const EventEmitter=require('events')
var e2=new EventEmitter()
e2.on('id1',(msg)=>{
    console.log(`Event id1 ${msg}`)
})
//Triggering the event object
e2.emit( 'id1','Hello World!')