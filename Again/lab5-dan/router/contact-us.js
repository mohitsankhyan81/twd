const express=require('express');

const contactRouter=express.Router();

const path=require('path');

const rootdir=require('../util/path')
contactRouter.get("/add-home",(req,res,next)=>{
  console.log("there we post our home",req.body);
  res.sendFile(path.join(rootdir,"view","contact.html"))
});

const registeredHomes=[];


contactRouter.post("/add-home",(req,res,next)=>{
  console.log("this is the sumited form",req.body,{houseName:req.body.houseName});
  registeredHomes.push(req.boby.houseName);
  res.sendFile(path.join(rootdir,"view","add-contact.html"));
})

exports.contactRouter=contactRouter;
exports.registeredHomes=registeredHomes;