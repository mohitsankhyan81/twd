const express=require('express');

const userrouter=express.Router();
const path=require('path');
const rootdir=require('../util/path');

userrouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(rootdir,'views/store','home.html'));
})

module.exports=userrouter;

