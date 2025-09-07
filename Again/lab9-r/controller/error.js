const error=(req,res,next)=>{
  console.log("this page is not found");
  res.status(404).render('404');
}

exports.error=error;