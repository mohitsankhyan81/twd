const express=require('express');

const hostrouter=express.Router();

const {input}=require('../controllers/home');

const {post} = require('../controllers/home');
hostrouter.get("/add-home",input);

const registeredHouse=[];
hostrouter.post("/add-home",post)

exports.hostrouter=hostrouter;
exports.registeredHouse=registeredHouse;