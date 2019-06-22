const express = require('express')
const mysql = require('mysql')

const app = express()

const port = 3000

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory'
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

app.listen(port,() => {
    console.log('Listening to port ' + port)
})