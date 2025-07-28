const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb');

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(!err) {
        console.log("Database connected successfully");
    } else {
        console.error("Database connection error:", err);
    }
})

module.exports = db;