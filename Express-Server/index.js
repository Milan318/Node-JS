const fs = require('fs')
const express = require('express')
const app = express()
const PORT = 8081
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})


app.listen(PORT,(err)=>{

    if(err)
    {
        console.log(err.message);
    }
    else{
        console.log(`Server Start On Port:${PORT}`);
    }
})