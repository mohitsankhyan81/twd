const express=require('express');

const userRouter=express.Router();

userRouter.get("/",(req,res,next)=>{
  console.log('this is the first page of airbnb');
  res.send(`
    <h1>This is the first page of airbnb</h1>
    <a href="/host/add-home">Add Home</a>
    `);
});

module.exports=userRouter;
