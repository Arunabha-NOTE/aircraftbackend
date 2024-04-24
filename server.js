const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'aircraft'
    }
)

app.get('/aircraft',(req,res)=> {
    const sql = "SELECT * From Aircraft";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/factory',(req,res)=> {
    const sql = "SELECT * From Factory";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get('/company',(req,res)=> {
    const sql = "SELECT * From Company";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get('/staff',(req,res)=> {
    const sql = "SELECT * From Staff";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get('/departments',(req,res)=> {
    const sql = "SELECT * From Department";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})