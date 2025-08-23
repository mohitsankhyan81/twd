const routers=(req,res)=>{

  res.setHeader("Contest-type","text/html");


  if("/"===req.url){
    res.end("My name is mohit sankhyan");
  }

  else if("/about-us"===req.url){
    res.end("I am from kalka");
  }

  else if("/from"===req.url){
    res.end("I am from kalka");
  }

  else{
    res.end("Go Back to Home");
  }
}

module.exports=routers;

