const express=require('express');

const userRouter=express.Router();

const {home}=require('../controllers/home')

userRouter.get("/",home);

module.exports=userRouter;