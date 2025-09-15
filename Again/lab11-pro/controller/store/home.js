const Data = require("../../model/home");

const homelistval=(req,res,next)=>{
  Data.fetchdata((registerhome)=>{
  console.log("This is the first page ");
  res.render('store/homelist',{registerhome:registerhome});
  });
};

const gethomedetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Data.findById(homeId, (home) => {
      res.render("store/home-details", { home: home });
  });
};

exports.gethomedetails=gethomedetails;
exports.homelistval=homelistval;