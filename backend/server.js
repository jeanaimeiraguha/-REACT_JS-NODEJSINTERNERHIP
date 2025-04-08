import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo"
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database.');
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ error: "Error querying the database." });
    }
    return res.json(data);
  });
});

app.listen(1000, () => {
  console.log("Server is running at http://localhost:1000");
});