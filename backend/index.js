import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
//import axios from 'axios'

const app =express()
app.use(cors)
app.listen(8081,()=>{
     console.log("Server is running on http://localhost:8081")
})