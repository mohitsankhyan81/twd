const express=require('express');

const hostrouter=express.Router();

const {input} = require('../controller/home');
const {succes}=require('../controller/home')
hostrouter.get("/add-home",input);

hostrouter.post("/add-home",succes)

exports.hostrouter=hostrouter;