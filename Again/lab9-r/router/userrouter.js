const express=require('express');

const userrouter=express.Router();

const {home, booking, getfavlist,index}=require('../controller/home');

userrouter.get("/",home);
userrouter.get('/booking',booking);
userrouter.get('/getfav',getfavlist)
userrouter.get('/homes',index);
module.exports=userrouter