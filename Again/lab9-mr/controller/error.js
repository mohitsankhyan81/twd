const error=(req,res,next)=>{
  console.log("FIle is not found");
  res.status(404).render('404');
};

exports.error=error;