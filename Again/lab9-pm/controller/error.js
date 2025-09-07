const errorval=(req,res,next)=>{
  console.log("error in this page not found ")
  res.status(404).render('404');
}
exports.errorval=errorval;