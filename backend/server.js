import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app =express();
app.use(cors());
app.listen(3000,()=>{
    console.log("My App is running on https://localhost:3000");
})