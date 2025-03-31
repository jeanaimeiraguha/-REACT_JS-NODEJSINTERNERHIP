import express from 'express';
import mysql from 'mysql';

const app = express();  
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tests'
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err); 
    }
    console.log("Database connected successfully");
});

app.get("/", (req, res) => {
    res.json("Hello! This is the backend");
});


app.get("/books", (req, res) => {
    const sql = "SELECT * FROM books";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching books:", err); 
            return res.status(500).json(err); 
        }
        return res.json(data); 
    });
});


app.listen(1000, () => {
    console.log('Server is running on port 1000');
});