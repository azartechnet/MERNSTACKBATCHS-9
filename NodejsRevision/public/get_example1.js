// server.js
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/process_get', function(req, res) {
    let data = req.query;
    console.log(data);
    res.send(data);
});

const server = app.listen(3000, function() {
    console.log("Server is running at http://localhost:3000");
});
