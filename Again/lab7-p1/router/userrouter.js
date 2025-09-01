const express=require('express');

const userrouter=express.Router();

const path=require('path');

const rootdir=require('../util/path');
const { registerhouse } = require('./hostrouter');

userrouter.get("/",(req,res,next)=>{
  console.log('this is home page');
  console.log(registerhouse)
  res.render('home',{registerhouse:registerhouse});
})

module.exports=userrouter;