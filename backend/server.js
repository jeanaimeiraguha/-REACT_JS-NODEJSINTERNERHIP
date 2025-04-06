import express from 'express';
import mysql from 'mysql';

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo"  
});

db.connect(err => {
  if (err) {
    console.log('DB connection error:', err);
    return;
  }
  console.log('Connected to MySQL database "demo"');
});

app.get('/', (req, res) => {
  res.send('Welcome to your Node.js !');
});

app.post('/', (req, res) => {
  const { name, email } = req.body;
  const sql = "INSERT INTO users(username, email) VALUES(?, ?)"; // Corrected column name

  db.query(sql, [name, email], (err, result) => { // Execute query
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).send(err); // Handle errors here
    }
    res.send({ message: "User created successfully", userId: result.insertId }); // Send success response
  });
});

app.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});