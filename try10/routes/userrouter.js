const path = require('path');
const express = require('express');
const router = express.Router();
const root=require('../utility/pathutil');


router.get("/", (req, res) => {
  res.sendFile(path.join(root, "view", "home.html"));
});

module.exports = router;
