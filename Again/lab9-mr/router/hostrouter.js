const express=require('express');

const hostrouter=express.Router();

const { inputval, sucess } = require('../controller/home');

hostrouter.get("/add-home",inputval);

hostrouter.post("/add-home",sucess);

exports.hostrouter=hostrouter;