const express=require('express');

const path=require('path');

const rootdir=require('../util/home');
const { storeval, gethomedetails, favhouses, postfavhomes } = require('../controllers/store/home');

const storerouter=express.Router();

storerouter.get("/homes",storeval);
storerouter.get("/homes/:homeId",gethomedetails);
storerouter.get("/fav",favhouses);

storerouter.post('/fav',postfavhomes);

module.exports=storerouter;