const path = require('path');
const express = require('express');
const root = require('../utility/pathutil');

const contactRoute = express.Router();

contactRoute.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(root, "views", "contact.html"));
});

contactRoute.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(root, "views", "contact-sucess.html"));
});


module.exports = contactRoute;
