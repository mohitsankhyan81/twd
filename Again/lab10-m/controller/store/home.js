const Data = require("../../model/home");

const homepage=(req,res,next)=>{
  Data.fetchdata(registerHouse=>{
  res.render('store/homelist',{registerHouse:registerHouse,pagetitle:'this is the home page'});
  });
}

exports.homepage=homepage;
