const express=require('express');

const path=require('path');

const hostrouter=express.Router();

const rootdir=require('../util/path');

const {getAddhome, getresult}=require('../controllers/home.js');
hostrouter.get("/add-home",getAddhome);

hostrouter.post('/add-home',getresult);
exports.hostrouter=hostrouter;