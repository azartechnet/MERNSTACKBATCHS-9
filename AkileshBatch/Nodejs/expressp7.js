const express=require('express')
const app=express()
const PORT=3000
//Setting single locals variable

app.locals.email="azar@gmail.com"

console.log(app.locals.email)

//setting multiple locals variables

app.locals.domain="www.google.com"
app.locals.age="24"
app.locals.company='sdlc'

console.log(app.locals)