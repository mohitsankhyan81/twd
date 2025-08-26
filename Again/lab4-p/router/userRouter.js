const express=require('express');
const path=require('path');
const userrouter=express.Router();


const rootdir=require('../utill/pathutill');
userrouter.get("/",(req,res,next)=>{
  console.log("this is the home page ",req.body);
  res.sendFile(path.join(rootdir,"view","home.html"));
})

module.exports=userrouter;