const express=require('express');

const path=require('path');

const hostrouter= express.Router();

const rootdir=require('../util/path');
const { input, sucess } = require('../controller/home');

hostrouter.get("/add-home",input)


hostrouter.post("/add-home",sucess);

exports.hostrouter=hostrouter;

