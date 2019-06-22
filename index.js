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
    let post = req.body;
    db.query('CALL addOrEditItem(?,?,?,?);', [0, post.name, post.qty, post.amount], (err, results) => {
        if(err) throw(err);
        console.log(results);
        res.send("Created")
    })    
})

app.listen(port,() => {
    console.log('Listening to port ' + port)
})