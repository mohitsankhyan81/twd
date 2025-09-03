const express=require('express');

const hostrouter=express.Router();

const { input, postinput } = require('../controller/home');


hostrouter.get('/add-home',input);

hostrouter.post('/add-home',postinput)

exports.hostrouter=hostrouter;
