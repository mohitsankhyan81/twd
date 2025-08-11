const path = require('path');
const express = require('express');
const router = express.Router();
const root=require('../utility/pathutil');


router.get("/add-home", (req, res) => {
  res.sendFile(path.join(root, "view", "addhome.html"));
});

router.post("/add-home", (req, res) => {
  res.sendFile(path.join(root,"view","home-edit.html"))
});

modul e.exports = router;
