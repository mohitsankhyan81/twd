const express=require('express');

const hostrouter=express.Router();

hostrouter.get("/host/add-home",(req,res,next)=>{
  console.log("this is the add home page ",req.url,req.method);
  res.send(`
      <h1>Enter your details hear </h1>
      <form action="/host/add-home" method="POST">
      <input type="text" name="houseName" placeholder="Enter the house name ">
      <input type="submit">
      </form>
    `)
})

hostrouter.post("/host/add-home",(req,res,next)=>{
  console.log("This is after post page",req.url,req.method,req.body);
  res.send(`
    <h1>you house is register sucessfully</h1>
    <a href="/">Go back to home</a>
    `)
})

module.exports=hostrouter;