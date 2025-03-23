import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
//import axios from 'axios'

const app =express()
app.use(cors)
const  db=mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"",
     database:"crud"
})
app.get('/',(req, res)=>{
   const sql ="SELECT * FROM users" ;
   db.query(sql,(err,resullt)=>{
if(err) return res.json({Message:"Failed to be fetched"})
     return res.json(result);
   }) 
})
app.listen(5000,()=>{
     console.log("Server is running on http://localhost:5000")
})