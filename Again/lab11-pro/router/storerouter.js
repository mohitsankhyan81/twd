const express=require('express');

const path=require('path');

const rootdir=require('../util/path');
const { homelistval, gethomedetails } = require('../controller/store/home');


const storerouter=express.Router();

storerouter.get("/homes",homelistval);
storerouter.get('/homes/:homeId',gethomedetails);

module.exports=storerouter;