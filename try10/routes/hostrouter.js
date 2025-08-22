const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const root=require('../../Practice-set/lec-10-practice1/utility/pathutil');

hostRouter.get("/add-home", (req, res) => {
  res.sendFile(path.join(root, "view", "addhome.html"));
});

const registeredHomes=[];

hostRouter.post("/add-home", (req, res) => {
  console.log('Home Registeration Sucess for ',req.body,req.body.housename);
  registeredHomes.push({housename : req.body.housename});
  res.sendFile(path.join(root,"view","home-edit.html"))
});

exports.hostRouter=hostRouter;
exports.registeredHomes=registeredHomes;
