const Data = require("../../model/home");
const home = require("../../util/home");

const storeval=(req,res,next)=>{
  Data.fetchdata((registerhouse)=>{
  console.log("This is the home page");
  console.log(registerhouse);
  res.render("store/storelist",{registerhouse:registerhouse});
  });
}
const gethomedetails=(req,res,next)=>{
  const homeId=req.params.homeId;
  Data.findbyid(homeId,(home)=>{
    res.render('store/details-list',{home:home})
  })
}
exports.gethomedetails=gethomedetails;
exports.storeval=storeval;