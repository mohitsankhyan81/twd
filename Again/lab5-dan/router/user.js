const express=require('express');
const path=require('path');
const userRouter=express.Router();


const rootdir=require('../util/path')
const {registeredHomes} = require("./contact-us");
userRouter.get("/",(req,res,next)=>{
  console.log(registeredHomes);
  res.sendFile(path.join(rootdir,"view","home.html"));
})

module.exports=userRouter;