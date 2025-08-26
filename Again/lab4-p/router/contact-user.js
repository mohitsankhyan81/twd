const express=require('express');

const path=require('path');

const contactus=express.Router();

const rootdir=require('../utill/pathutill');

contactus.get("/contact-us",(req,res,next)=>{
  console.log("this the contact-us form");
  res.sendFile(path.join(rootdir,"view","contact-us.html"));
})

contactus.post("/contact-us",(req,res,next)=>{
  console.log("your form is sumitted",req.body);
  res.sendFile(path.join(rootdir,"view","sumit.html"));
})

module.exports=contactus;