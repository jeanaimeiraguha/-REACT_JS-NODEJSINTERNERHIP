import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

db.connect(err => {
    if (err) {
        console.error("Failed to connect to database:", err);
        return;
    }
    console.log("Connected successfully to database");
});


app.get('/user', (req, res) => {
    const sql = "SELECT * FROM user"; 

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Failed to retrieve users:", err);
            return res.status(500).json({ Error: "Failed to retrieve users" });
        }
        res.json(result);
    });
});


app.post('/user', (req, res) => {
    const { username, address } = req.body;

    if (!username || !address) {
        return res.status(400).json({ error: "Username and address are required" });
    }

    const sql = "INSERT INTO user(username, address) VALUES(?, ?)";

    db.query(sql, [username, address], (err, result) => {
        if (err) {
            console.error("Failed to add user:", err);
            return res.status(500).json({ error: "Failed to add user" });
        }
        res.json({ message: "User added successfully", userId: result.insertId });
    });
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
