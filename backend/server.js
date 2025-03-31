import express from 'express';
import mysql from 'mysql';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tests'
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database connected successfully");
    }
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

app.post("/books", (req, res) => {
    const sql = "INSERT INTO books (`id`, `book_name`, `description`) VALUES (?)"; // Fixed column names
    const values = [12, "Kiswahili", "Learn Kiswahili"];

    db.query(sql, [values], (err, result) => { // Added a callback to handle the query result
        if (err) {
            console.error("Error inserting book:", err);
            return res.status(400).json("Failed to insert book");
        }
        return res.json({ id: result.insertId, message: "Book inserted successfully" }); // Respond with success message
    });
});

app.listen(1000, () => {
    console.log('Server is running on port 1000');
});