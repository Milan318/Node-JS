const express = require('express');
const app = express();
const port = 8081;

app.listen(port,(err)=>{
    if(!err) {
        console.log(`Server started`);
        console.log("http://localhost:" + port);
    } 
})