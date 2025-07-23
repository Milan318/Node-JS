const express = require('express');
const port = 8081;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.render('index')
})

app.listen(port,function(err){
    if(err) {
        console.log('error'+err);
    } else {
        console.log(`Server started`);
        console.log("http://localhost:" + port);
        
    }
})