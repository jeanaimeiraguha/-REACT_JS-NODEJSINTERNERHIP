// // import express from 'express'
// // import mysql from 'mysql'
// // import cors from 'cors'
// // //import axios from 'axios'

// // const app =express()
// // app.use(cors)
// // const  db=mysql.createConnection({
// //      host:"localhost",
// //      user:"root",
// //      password:"",
// //      database:"crud"
// // })
// // app.get('/',(req, res)=>{
// //    const sql ="SELECT * FROM users" ;
// //    db.query(sql,(err,resullt)=>{
// // if(err) return res.json({Message:"Failed to be fetched"})
// //      return res.json(result);
// //    }) 
// // })
// // app.listen(5000,()=>{
// //      console.log("Server is running on http://localhost:5000")
// // })
// // const express=require('express')
// import express from 'express'
// import cors from 'cors'
// // app.use(cors());
// const app=express()
// app.listen(8081,()=>{
//      console.log("listening")
// })
import express from'express'
import mysql from 'mysql'
import cors from 'cors'
const app=express()
app.use(cors())
const db=mysql.createConnection({
     host:"localhost",
     user:'root',
     password:'',
     database:'crud'
})
db.connect(err=>{
     if(err){
          console.log("Failed to be connected");
          return;
     }
     else{
          console.log("Connected successfully");
          return;
     }
})
//Get List of all students
app.get('/user',(req,res)=>{

db.query("SELECT * from user",(err,result)=>{
     if (err) {
          console.log("Failed to search")
          return res.status(500).json({Error:"Failed to retreive"});
          
     }
     else{
          
          return res.status(200).json({Message:"Okay "})
     }
     res.json(result)
})
})
app.listen(5000,()=>{
     console.log('Sever is on ..')
})