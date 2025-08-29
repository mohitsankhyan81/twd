const express=require('express');

const path=require('path');

const userRouter=express.Router();

const rootdir=require('../util/path');
const { registerHouse } = require('./hostRouter');

userRouter.get("/",(req,res,next)=>{
  console.log(registerHouse);
  res.render('home',{registerHouse:registerHouse});
});

module.exports=userRouter;