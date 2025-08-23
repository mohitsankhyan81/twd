const router1=(req,res)=>{
  res.setHeader("Contest-type","text/html");

  if('/'===req.url){
    res.end("<h1>Welcome to whome page</h1>");
  }
  else if('/contact-us'===req.url){
    res.end("<h1>Welcome to contact info page</h1>")
  }

  else if('/about-us'===req.url){
    res.end('<h1>Welcome to about us page section</h1>');
  }

  else{
    res.end('<h1>404 accor in this page</h1>')
  }
}

module.exports=router1;