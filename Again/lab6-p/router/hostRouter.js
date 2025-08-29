const express=require('express');

const path=require('path');

const hostrouter=express.Router();

const rootdir=require('../util/path');

hostrouter.get("/add-home",(req,res,next)=>{
  console.log('This is our router module');
  res.sendFile(path.join(rootdir,"views","houseInfo.html"));
});

const registerHouse=[];

hostrouter.post('/add-home',(req,res,next)=>{
  console.log("This is the form submint section",req.body,req.body.houseName);
  registerHouse.push(req.body);
  res.sendFile(path.join(rootdir,"views","house-go.html"));
})
exports.registerHouse=registerHouse;
exports.hostrouter=hostrouter;