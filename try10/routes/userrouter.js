const path = require('path');
const express = require('express');
const router = express.Router();
const root=require('../../Practice-set/lec-10-practice1/utility/pathutil');
const {registeredHomes} =require('./hostrouter');

router.get("/", (req, res) => {
  console.log(registeredHomes);
  res.sendFile(path.join(root, "view", "home.html"));
});

module.exports = router;
