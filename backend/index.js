import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON data

// Database Connection
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

// Get List of All Users
app.get('/user', (req, res) => {
    const sql = "SELECT * FROM user"; // Ensure table name is correct

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Failed to retrieve users:", err);
            return res.status(500).json({ Error: "Failed to retrieve users" });
        }
        res.json(result);
    });
});

// Add New User
app.post('/user', (req, res) => {
    const { id, username, address } = req.body;

    if (!id || !username || !address) {
        return res.status(400).json({ Error: "Missing required fields" });
    }

    const sql = "INSERT INTO user(id, username, address) VALUES(?, ?, ?)";

    db.query(sql, [id, username, address], (err, result) => {
        if (err) {
            console.error("Failed to add user:", err);
            return res.status(500).json({ Error: "Failed to add user" });
        }
        res.json({ Message: "User Added Successfully" });
    });
});

// Start Server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
