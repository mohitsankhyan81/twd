const express=require('express');

const userrouter=express.Router();
const path=require('path');
const rootdir=require('../util/path');
const { registeredhouse } = require('./hostrouter');

userrouter.get("/",(req,res,next)=>{
  console.log(registeredhouse);
  res.render('store/home',{registeredhouse:registeredhouse});
})

module.exports=userrouter;

