const errorval=(req,res,next)=>{
  console.log("this is the error page");
  res.render('error');
}

exports.errorval=errorval;