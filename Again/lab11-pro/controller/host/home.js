const Data = require("../../model/home");

const sucesshome=(req,res,next)=>{
  console.log("This is the sucess page",req.body);
  const {houseName,price,rating,url,location}=req.body;
  const home=new Data(houseName,price,rating,url,location);
  home.save();
  res.render('store/sucess');
}

const inputpageval=(req,res,next)=>{
  console.log("This is the input page");
  res.render('host/inputpage');
}

exports.sucesshome=sucesshome;
exports.inputpageval=inputpageval