const express=require('express');

const userrouter=express.Router();

const {home}=require('../controller/home')

userrouter.get("/",home);

module.exports=userrouter