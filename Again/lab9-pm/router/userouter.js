const express=require('express');

const userrouter=express.Router();

const path=require('path');

const rootdir=require('../util/path');
const { registeredhouse } = require('./hostrouter');
const { homeval } = require('../controller/home');

userrouter.get("/",homeval);

module.exports=userrouter;