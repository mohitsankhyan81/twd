const express=require('express');

const path=require('path');

const userRouter=express.Router();

userRouter.get("/",(req,res,next)=>{
  console.log("this the user welcome page ");
  res.sendFile(path.join(__dirname,'../',"view","home.html"));
})

module.exports=userRouter;
