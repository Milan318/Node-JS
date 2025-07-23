const express = require('express');
const app = express();
const port = 8081;
let employees = [];
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/', (req, res) => {
    return res.render('index',{
        employees
    })
})

app.get("/employee/delete/:id", (req, res) => {
    const {id}=req.params;
    employees = employees.filter((employee) => employee.id != id);
    return res.redirect("/");
});

app.post('/login', (req, res) => {
    const id = Date.now(); 
    const { employee_id, employee_name, employee_dapartment, employee_salary } = req.body;
    
    employees.push({
        id,
        employee_id,
        employee_name,
        employee_dapartment,
        employee_salary
    });

    res.redirect('/');
});




app.listen(port, (err) => {
    if (err) {
        return console.log(err.massage);
    }else {
         console.log(`Server is start`);
        console.log(`http://localhost:` + port)
    }
        
});