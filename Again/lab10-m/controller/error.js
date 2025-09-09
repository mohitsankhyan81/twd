const errorpage=(req,res,next)=>{
  console.log("this is 404 page");
  res.status(404).render('404',{pagetitle:'my name is mohit'});
}

exports.errorpage=errorpage;