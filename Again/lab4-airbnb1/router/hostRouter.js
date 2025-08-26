const express=require('express');
const path=require('path');
const hostrouter=express.Router();

const rootdir=require('../util/pathutill');

hostrouter.get("/host/add-home",(req,res,next)=>{
  console.log("this is the add home page ",req.url,req.method);
  res.sendFile(path.join(rootdir,"view","add-home.html"))
})

hostrouter.post("/host/add-home",(req,res,next)=>{
  console.log("This is after post page",req.url,req.method,req.body);
  res.sendFile(path.join(rootdir,"view","final.html"));
})

module.exports=hostrouter;