const express = require('express')
const mysql = require('mysql')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())

const port = 3000

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory',
    multipleStatements: true
});

db.connect((err) => {
    if(err)
        throw(err)
    else
        console.log('Connection Success');
});

app.get('/inventory', (req, res)=>{
    let dataQuery = "SELECT * FROM `items";
    let query = db.query(dataQuery, (err, results) => {
        if(err) throw(err);
        console.log(results);
        res.send(results)
    })    
});

app.get('/inventory/:id', (req, res)=>{
    db.query("SELECT * FROM `items` WHERE id = ?",[req.params.id], (err, results) => {
        if(err) throw(err);
        console.log(results);
        res.send(results)
    })    
});

app.delete('/inventory/:id', (req, res) => {
    db.query('DELETE FROM `items` WHERE `id` = ?', [req.params.id], (err, results) => {
        if(err) throw(err);
        console.log("Deleted succesfully");
        res.send("Deleted succesfully")
    })    
})

app.post('/inventory', (req, res) => {
    let emp = req.body;
    db.query('SET @id = ?, SET @name = ?, SET @qty = ?, SET @amount = ?; CALL addOrEditItem(@id,@name,@qty,@amount;', [emp.id, emp.name, emp.qty, emp.amount], (err, results) => {
        if(err) throw(err);
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send("Added " + element[0].id)
            })
    })    
})

app.put('/inventory', (req, res) => {
    let emp = req.body;
    db.query('SET @id = ?, SET @name = ?, SET @qty = ?, SET @amount = ?; CALL addOrEditItem(@id,@name,@qty,@amount;', [emp.id, emp.name, emp.qty, emp.amount], (err, results) => {
        if(err) throw(err);
        res.send('Updated succesfully')
    })    
})

app.listen(port,() => {
    console.log('Listening to port ' + port)
})