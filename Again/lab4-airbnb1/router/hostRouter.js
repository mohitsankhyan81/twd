const express=require('express');
const path=require('path');
const hostrouter=express.Router();

hostrouter.get("/host/add-home",(req,res,next)=>{
  console.log("this is the add home page ",req.url,req.method);
  res.sendFile(path.join(__dirname,"../","view","add-home.html"))
})

hostrouter.post("/host/add-home",(req,res,next)=>{
  console.log("This is after post page",req.url,req.method,req.body);
  res.sendFile(path.join(__dirname,"../","view","final.html"))
})

module.exports=hostrouter;