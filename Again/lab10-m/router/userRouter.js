const express=require('express');

const userRouter=express.Router();

const { homepage } = require('../controller/store/home');

userRouter.get("/",homepage);

module.exports=userRouter;