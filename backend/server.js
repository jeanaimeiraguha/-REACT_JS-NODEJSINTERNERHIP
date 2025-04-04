// 📁 backend/db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_db",
});

db.connect((err) => {
  if (err) {
    console.error(" Database connection failed:", err.message);
  } else {
    console.log(" Connected to MySQL Database");
  }
});

module.exports = db;


// 📁 backend/server.js
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// GET all students
app.get("/api/students", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// GET single student
app.get("/api/students/:id", (req, res) => {
  db.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
});

// POST new student
app.post("/api/students", (req, res) => {
  const { name, email } = req.body;
  db.query("INSERT INTO students (name, email) VALUES (?, ?)", [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Student added", id: result.insertId });
  });
});

// PUT update student
app.put("/api/students/:id", (req, res) => {
  const { name, email } = req.body;
  db.query("UPDATE students SET name=?, email=? WHERE id=?", [name, email, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Student updated" });
  });
});

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  db.query("DELETE FROM students WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Student deleted" });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));

