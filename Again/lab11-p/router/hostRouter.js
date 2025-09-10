const express=require('express');
const { inputpage, sucesspage, houseHost } = require('../controller/host/home');

const hostrouter=express.Router();


hostrouter.get("/add-home",inputpage);

hostrouter.post('/add-home',sucesspage)

hostrouter.get('/host/homelist',houseHost);
module.exports=hostrouter;