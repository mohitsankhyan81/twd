const express=require('express');

const hostrouter=express.Router();

const path=require('path');

const rootdir=require('../util/path');


hostrouter.get('/add-home',(req,res,next)=>{
  console.log("This is the home page",res.body);
  res.sendFile(path.join(rootdir,'views','input.html'));
});

const registerhouse=[];

hostrouter.post('/add-home',(req,res,next)=>{
  console.log("this is the post completed",req.body);
  registerhouse.push(req.body);
  res.sendFile(path.join(rootdir,'views','completed.html'));
})

exports.registerhouse=registerhouse;
exports.hostrouter=hostrouter;
