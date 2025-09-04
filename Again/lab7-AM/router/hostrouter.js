const express=require('express');

const hostrouter=express.Router();

const path=require('path');

const rootdir=require('../util/path');
const { input, sucess } = require('../controller/home');


hostrouter.get('/add-home',input);
hostrouter.post('/add-home',sucess);

exports.hostrouter=hostrouter;