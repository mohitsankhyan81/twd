const router = (req, res) => {
  res.setHeader("Contest-type", "text/html");
  if (req.url === '/') {
    console.log("This is the home page");
    res.end("This is the home page");
  } else if (req.url === '/home') {
    console.log("This is the inner home page");
    res.end("This is the inner home page");
  } else if (req.url === '/outer') {
    console.log("This is the outer page");
    res.end("This is the outer home page");
  } else {
    console.log("This is the error page");
    res.end("This is the error page");
  }
};

module.exports = router;
