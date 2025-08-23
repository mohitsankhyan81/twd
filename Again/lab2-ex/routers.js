const fs=require('fs');
const path=require('path');

const router=(req,res)=>{
  res.setHeader("Contest-type","text/html");

  let filePath="";

  if(req.url==='/'){
    filePath=path.join(__dirname,"view","home.html");
  }
  else if(req.url==='/men'){
    filePath=path.join(__dirname,"view","men.html");
  }

  else if(req.url==='/women'){
    filePath=path.join(__dirname,"view","woman.html");
  }
  else if(req.url==='/kid'){
    filePath=path.join(__dirname,"view","kid.html");
  }

  fs.readFile(filePath,(err,data)=>{
    if(err){
      res.end("this give me error");
    }
    else{
      res.end(data);
    }
  });
};

module.exports=router;