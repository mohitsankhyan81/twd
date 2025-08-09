const path = require('path');
const express = require('express');
const router = express.Router();

router.get("/add-home", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "view", "addhome.html"));
});

router.post("/add-home", (req, res) => {
  res.send(`<h1>Home "${req.body.housename}" registered successfully!</h1>`);
});

module.exports = router;
