const express=require('express');

const path=require('path');

const userRouter=express.Router();

const rootdir=require('../util/path');
const { registerHouse } = require('./hostRouter');
const { user } = require('../controllers/home');

userRouter.get("/",user);

module.exports=userRouter;