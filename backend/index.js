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
    database: "crud",
    port: 3306 
});

// Connect to the database
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
            console.error("SQL Error:", err);
            return res.status(500).json({ error: "Failed to retrieve users" });
        }
        if (result.length === 0) {
            return res.json({ message: "No users found" });
        }
        res.json(result);
    });
});


// app.get('/user/:id', (req, res) => {
//     const { id } = req.params;
//     const sql = "SELECT * FROM user WHERE id = ?";
    
//     db.query(sql, [id], (err, result) => {
//         if (err) {
//             console.error("SQL Error:", err);
//             return res.status(500).json({ error: "Failed to retrieve user" });
//         }
//         if (result.length === 0) {
//             return res.json({ message: "User not found" });
//         }
//         res.json(result[0]);
//     });
// });

// // Add a new user
// app.post('/user', (req, res) => {
//     const { username, address } = req.body;
    
//     if (!username || !address) {
//         return res.status(400).json({ error: "Username and address are required" });
//     }

//     const sql = "INSERT INTO user (username, address) VALUES (?, ?)";
    
//     db.query(sql, [username, address], (err, result) => {
//         if (err) {
//             console.error("SQL Error:", err);
//             return res.status(500).json({ error: "Failed to add user" });
//         }
//         res.json({ message: "User added successfully", userId: result.insertId });
//     });
// });

// // Update a user
// app.put('/users/:id', (req, res) => {
//     const { id } = req.params;
//     const { username, address } = req.body;
    
//     if (!username || !address) {
//         return res.status(400).json({ error: "Username and address are required" });
//     }

//     const sql = "UPDATE user SET username = ?, address = ? WHERE id = ?";
    
//     db.query(sql, [username, address, id], (err, result) => {
//         if (err) {
//             console.error("SQL Error:", err);
//             return res.status(500).json({ error: "Failed to update user" });
//         }
//         if (result.affectedRows === 0) {
//             return res.json({ message: "User not found or no changes made" });
//         }
//         res.json({ message: "User updated successfully" });
//     });
// });

// // Delete a user
// app.delete('/users/:id', (req, res) => {
//     const { id } = req.params;
//     const sql = "DELETE FROM user WHERE id = ?";
    
//     db.query(sql, [id], (err, result) => {
//         if (err) {
//             console.error("SQL Error:", err);
//             return res.status(500).json({ error: "Failed to delete user" });
//         }
//         if (result.affectedRows === 0) {
//             return res.json({ message: "User not found" });
//         }
//         res.json({ message: "User deleted successfully" });
//     });
// });

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
