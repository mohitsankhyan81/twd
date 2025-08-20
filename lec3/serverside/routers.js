const routers=(req,res)=>{
  res.setHeader("Content-Type","text/html");

  if(req.url==='/'){
    res.end("<h1>Welcome Student</h1>")
  }
  else if(req.url === '/contact-us'){
    res.end("<h1>We Call you after some time</h1>");
  }
  else if(req.url === '/attendence'){
    res.end("<h1>Your attendence is update shortly</h1>");
  }
  else if(req.url === '/campus'){
    res.end("<h1>Your campus in very beauty full</h1>");
  }
  else{
    res.end("<h1>404 eroor occor</h1>")
  }
}

module.exports=routers