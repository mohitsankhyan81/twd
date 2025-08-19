const path = require('path');
const express = require('express');
const router = express.Router();
const root=require('../../Practice-set/lec-10-practice1/utility/pathutil');


router.get("/add-home", (req, res) => {
  res.sendFile(path.join(root, "view", "addhome.html"));
});

router.post("/add-home", (req, res) => {
  res.sendFile(path.join(root,"view","home-edit.html"))
});

module.exports = router;
