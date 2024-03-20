var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send("Welocme to Application!");
});
app.listen(5000);
console.log("Server is Running..")