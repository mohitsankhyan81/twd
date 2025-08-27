const express=require('express');
const path=require('path');
const userRouter=express.Router();


const rootdir=require('../util/path');
const { registeredhouse } = require('./contact-us');
userRouter.get("/",(req,res,next)=>{
  console.log(registeredhouse);

  res.render('home',{registeredhouse:registeredhouse});
})

module.exports=userRouter;