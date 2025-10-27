const express=require('express');

const hostrouter=express.Router();

const path=require('path');

const rootdir=require('../util/path');

hostrouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootdir,'views','add-home.html'));
})

const registeredhouse=[];

hostrouter.post("/add-home",(req,res,next)=>{
  console.log("Here all the data is comming",req.body);
  registeredhouse.push(req.body);
  res.sendFile(path.join(rootdir,'views','succes.html'));
})

exports.registeredhouse=registeredhouse;
exports.hostrouter=hostrouter;