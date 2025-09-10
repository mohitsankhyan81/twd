const express=require('express');

const userRouter=express.Router();

const { homepage, favlist, booking, indexvalue, getHomes } = require('../controller/store/home');

userRouter.get("/",homepage);
userRouter.get('/fav-list',favlist);
userRouter.get('/booking',booking)
userRouter.get('/homes',indexvalue);

userRouter.get('/homes/:homeid',getHomes)
module.exports=userRouter;