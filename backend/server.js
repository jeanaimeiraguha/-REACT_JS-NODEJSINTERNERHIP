import express from 'express'
import mysql from 'mysql';
const app =expres();
const db =mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'tests'
})
app.get("/",(req,res)=>{
     res.json("Hello This is the backend")
})
app.listen(3000,()=>{
console.log('running');
});