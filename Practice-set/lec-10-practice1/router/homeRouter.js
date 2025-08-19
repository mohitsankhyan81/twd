// core module
const path = require('path');

// external module
const express = require('express');

// local module
const root = require('../utility/pathutil');

const homeRoute = express.Router();

homeRoute.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(root, "views", "home.html"));
});

module.exports = homeRoute;
