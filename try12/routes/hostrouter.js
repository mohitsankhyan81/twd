const path = require('path');
const express = require('express');
const router = express.Router();
const root = require('../../Practice-set/lec-10-practice1/utility/pathutil');

router.get("/", (req, res) => {
  res.sendFile(path.join(root, "view", "home.html"));
});

const registerdHomes=[];

router.get("/about", (req, res) => {
  res.sendFile(path.join(root, "view", "about.html"));
});

module.exports = router;
