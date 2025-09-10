const express=require('express');

const userRouter=express.Router();

const { homepage, favlist, booking, indexvalue } = require('../controller/store/home');

userRouter.get("/",homepage);
userRouter.get('/fav-list',favlist);
userRouter.get('/booking',booking)
userRouter.get('/homes',indexvalue);
module.exports=userRouter;