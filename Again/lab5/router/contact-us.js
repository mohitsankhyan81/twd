const express=require('express');

const contactRouter=express.Router();

const path=require('path');

const rootdir=require('../util/path')
contactRouter.get("/add-home",(req,res,next)=>{
  console.log("there we post our home",req.body);
  res.sendFile(path.join(rootdir,"view","contact.html"))
});

contactRouter.post("/add-home",(req,res,next)=>{
  console.log("this is the sumited form",req.body);
  res.sendFile(path.join(rootdir,"view","add-contact.html"));
})

module.exports=contactRouter;