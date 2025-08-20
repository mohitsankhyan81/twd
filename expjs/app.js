const express=require('express');
const app=express();
const port=3555;


app.get('/',(req,res)=>{
  res.send("<h1>Welcome in this page</h1>");
})


app.get('/about',(req,res)=>{
  res.send("<h1>welcome to home section</h1>");
})

app.listen(port,(req,res)=>{
  console.log(`http://localhost:${port}`)
})