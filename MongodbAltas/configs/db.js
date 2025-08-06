const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://milanmandaviya7495:12345@cluster0.gswuxkt.mongodb.net/product')

let Product = mongoose.connection

module.exports = Product;