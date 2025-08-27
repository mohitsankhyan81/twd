const express=require('express');

const contactRouter=express.Router();

const path=require('path');

const rootdir=require('../util/path')
contactRouter.get("/add-home",(req,res,next)=>{
  console.log("there we post our home",req.body);
  res.sendFile(path.join(rootdir,"views","contact.html"))
});

const registeredhouse=[];

contactRouter.post("/add-home",(req,res,next)=>{
  console.log("this is the sumited form",req.body,req.body.houseName);
  registeredhouse.push({houseName:req.body.houseName});
  res.sendFile(path.join(rootdir,"views","add-contact.html"));
})

exports.contactRouter=contactRouter;
exports.registeredhouse=registeredhouse;