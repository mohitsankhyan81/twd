const express=require('express');
const path=require('path');

const rootdir=require('../util/path');
const hostrouter=express.Router();

hostrouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootdir,'views/host','addhome.html'));
});

const registeredhouse=[];
hostrouter.post("/add-home",(req,res,next)=>{
  console.log("This is the register sucess full page",req.body);
  registeredhouse.push(req.body);
  res.sendFile(path.join(rootdir,'views/host','sucess.html'));
})

exports.registeredhouse=registeredhouse;
exports.hostrouter=hostrouter;