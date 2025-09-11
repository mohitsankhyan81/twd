const express=require('express');

const userRouter=express.Router();

const { homepage, favlist, booking, indexvalue, getHomes, postAddtofav } = require('../controller/store/home');

userRouter.get("/",homepage);
userRouter.get('/fav-list',favlist);
userRouter.get('/booking',booking)
userRouter.get('/homes',indexvalue);

userRouter.get('/homes/:homeId',getHomes)

userRouter.post('fav-list',postAddtofav)
module.exports=userRouter;