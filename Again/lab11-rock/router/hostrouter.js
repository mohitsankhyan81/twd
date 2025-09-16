const express=require('express');

const hostrouter=express.Router();
const path=require('path');

const rootdir=require('../util/home');
const { inputval, sucessval } = require('../controllers/host/home');

hostrouter.get('/add-home',inputval);

hostrouter.post('/add-home',sucessval);

exports.hostrouter=hostrouter;