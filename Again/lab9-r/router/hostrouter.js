const express=require('express');

const hostrouter=express.Router();

const { sucess, input } = require('../controller/home');

hostrouter.get("/add-home",input);

hostrouter.post("/add-home",sucess);

exports.hostrouter=hostrouter;