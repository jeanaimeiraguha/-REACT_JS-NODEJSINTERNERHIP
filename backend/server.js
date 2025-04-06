import express from 'express'
import mysql from 'mysql'
const app = express()
app.use(express.json())
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'demo'  
})
db.connect(err => {
  if (err) {
    console.log(' DB connection error:', err)
    return
  }
  console.log('Connected to MySQL database "demo"')
})

app.get('/', (req, res) => {
  res.send('Welcome to your Node.js !')
})

app.listen(5000, () => {
  console.log('Server is running at http://localhost:5000')
})
