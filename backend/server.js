import express from 'express'
import mysql from 'mysql';
const app =expres();
const db =mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'tests'
})
app.listen(3000,()=>{
console.log('running');
});