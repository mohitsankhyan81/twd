const express=require('express');

const storerouter=express.Router();

const path=require('path');

const rootdir=require('../util/path');

storerouter.get("/",(req,res,next)=>{
  console.log("this is the home page");
  res.render('store/homelist');
})

module.exports=storerouter;