const error=(req,res,next)=>{
  console.log("this page show error");
  res.status(404).render('404',{pageTitle:'404'});
}
exports.error=error;