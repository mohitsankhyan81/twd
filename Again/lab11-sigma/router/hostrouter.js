const express=require('express');

const hostrouter=express.Router();

const path=require('path');

const rootdir=require('../util/path');


hostrouter.get("/add-home",(req,res,next)=>{
  console.log("this is the home input page");
  res.render('host/input');
})

hostrouter.post("/add-home",(req,res,next)=>{
  console.log("your home is registersucessfully",req.body);
  res.render('store/sucesspage');
})

module.exports=hostrouter;