const express=require('express');

const path=require('path');

const rootdir=require('../util/home');
const { storeval, gethomedetails } = require('../controllers/store/home');

const storerouter=express.Router();

storerouter.get("/homes",storeval);
storerouter.get("/homes/:homeId",gethomedetails);

module.exports=storerouter;