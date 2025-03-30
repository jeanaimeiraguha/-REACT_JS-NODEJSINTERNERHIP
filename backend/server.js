import express from 'express'
import mysql from 'mysql';
const app =express();
const db =mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'tests'
})
app.get("/",(req,res)=>{
     res.json("Hello This is the backend")
})
app.get("/books",()=>{
     const sql ="SELECT * FROM books";
   db.query(sql,(err,data)=>{
     if (err)   return res.status(400).json("Error occured in selection");
     

   })  
})
app.listen(3000,()=>{
console.log('running');
});