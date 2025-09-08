const express=require('express');

const userrouter=express.Router();

const { homeval } = require('../controller/home');

userrouter.get("/",homeval);

module.exports=userrouter;