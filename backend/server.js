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

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ error: "Error fetching user." });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }
    return res.json(result[0]);
  });
});

app.post("/create", (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: "Username and email are required." });
  }

  const sql = "INSERT INTO users(username, email) VALUES(?, ?)";
  const values = [username, email];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting user:", err);
      return res.status(500).json({ error: "Error inserting user." });
    }
    return res.status(201).json({ message: "User created successfully", data: result });
  });
});

app.put("/update/:id", (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: "Username and email are required." });
  }

  const sql = "UPDATE users SET username = ?, email = ? WHERE id = ?";
  const values = [username, email, userId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error updating user:", err);
      return res.status(500).json({ error: "Error updating user." });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.json({ message: "User updated successfully!" });
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;

  const checkUserSql = "SELECT * FROM users WHERE id = ?";
  db.query(checkUserSql, [userId], (err, result) => {
    if (err) {
      console.error("Error checking if user exists:", err);
      return res.status(500).json({ error: "Error checking if user exists." });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    const deleteSql = "DELETE FROM users WHERE id = ?";
    db.query(deleteSql, [userId], (err, result) => {
      if (err) {
        console.error("Error deleting user:", err);
        return res.status(500).json({ error: "Error deleting user." });
      }
      return res.json({ message: "User deleted successfully!" });
    });
  });
});

app.listen(1000, () => {
  console.log("Server is running at http://localhost:1000");
});
