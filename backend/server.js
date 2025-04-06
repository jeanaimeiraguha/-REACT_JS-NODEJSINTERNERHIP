// Let's get started with Node js crud APi
import mysql from 'mysql'
import express from 'express'
app.use(express.json())

const app=express();
const db =mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:""
})
db.connect((err)=>{
  if(err) throw err;
  console.log("Connected successfully")
})

app.listen(3000,()=>{
  console.log("App is running on http://localhost:3000 ")
})