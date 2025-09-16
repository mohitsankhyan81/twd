const Data = require("../../model/home");

const inputval=(req,res,next)=>{
  console.log("This is the input house page");
  res.render('host/inputpage')
}


const sucessval=(req,res,next)=>{
  console.log("This is the sucess page ",req.body);
  const {houseName,price,rating,location,url}=req.body;
  const home=new Data(houseName,price,rating,location,url);
  home.save();
  res.render('host/sucesspage')
}

exports.sucessval=sucessval;
exports.inputval=inputval;