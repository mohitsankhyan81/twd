const express=require('express');
const path=require('path');
const userRouter=express.Router();


const rootdir=require('../util/path')
userRouter.get("/",(req,res,next)=>{
  console.log("this is home page");
  res.sendFile(path.join(rootdir,"view","home.html"));
})

module.exports=userRouter;