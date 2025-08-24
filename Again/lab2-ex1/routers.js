const fs = require('fs');
const path = require('path');

const routers = (req, res) => {
  let filePath = ""; // ek hi baar declare karo
  res.setHeader("Content-Type", "text/html");

  // serve static files (images, css, js)
  if (req.url.startsWith("/public/")) {
    filePath = path.join(__dirname, req.url);

    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".gif": "image/gif",
      ".css": "text/css",
      ".js": "application/javascript",
      ".html": "text/html"
    };

    res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
  }

  // normal HTML pages
  else if (req.url === "/") {
    filePath = path.join(__dirname, "view", "home.html");
    res.setHeader("Content-Type", "text/html");
  } else if (req.url === "/car1") {
    filePath = path.join(__dirname, "view", "car1.html");
    res.setHeader("Content-Type", "text/html");
  } else if (req.url === "/car2") {
    filePath = path.join(__dirname, "view", "car2.html");
    res.setHeader("Content-Type", "text/html");
  } else if (req.url === "/car3") {
    filePath = path.join(__dirname, "view", "car3.html");
    res.setHeader("Content-Type", "text/html");
  } else if (req.url === "/car4") {
    filePath = path.join(__dirname, "view", "car4.html");
    res.setHeader("Content-Type", "text/html");
  }

  // read and serve file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.end("<h1>404 error or something went wrong</h1>");
    } else {
      res.end(data);
    }
  });
};

module.exports = routers;
