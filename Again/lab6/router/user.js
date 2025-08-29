const express=require('express');
const path=require('path');
const userRouter=express.Router();


const rootdir=require('../util/path');
const { registedhouse } = require('./contact-us');
userRouter.get("/",(req,res,next)=>{
  console.log(registedhouse);
  res.render('home',{registedhouse,registedhouse,pageTitle:'our home'});
})

module.exports=userRouter;