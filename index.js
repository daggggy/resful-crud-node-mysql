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

app.listen(port,() => {
    console.log('Listening to port ' + port)
})