const path=require('path');


const router=(req,res)=>{
  res.setHeader("Contest-type","text/html")
  if(req.url==='/'){
    path.join(__dirname,'views','home.html');
  }

  else if(req.url==='/kid'){
    path.join(__dirname,'views','kid.html');
  }

  else if(req.url==='/men'){
    path.join(__dirname,'views','men.html');
  }

  else if(url.url==='women'){
    path.join(__dirname,'views','women.html');
  }
}

module.exports=router;