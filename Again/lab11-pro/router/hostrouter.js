const express=require('express');

const path=require('path');

const rootdir=require('../util/path');
const { sucesshome, inputpageval } = require('../controller/host/home');

const hostrouter=express.Router();

hostrouter.get("/add-home",inputpageval);


hostrouter.post("/add-home",sucesshome);

exports.hostrouter=hostrouter;