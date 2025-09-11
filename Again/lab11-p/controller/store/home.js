const Data = require("../../model/home");

const homepage=(req,res,next)=>{
  Data.fetchdata(registerHouse=>{
  res.render('store/homelist',{registerHouse:registerHouse,pagetitle:'this is the home page'});
  });
}

const favlist=(req,res,next)=>{
  Data.fetchdata(registerHouse=>{
  res.render('store/fav-list',{registerHouse:registerHouse,pagetitle:'this is the home page'});
  });
}

const booking=(req,res,next)=>{
  res.render('store/booking');
}

const indexvalue=(req,res,next)=>{
  Data.fetchdata(registerHouse=>{
  res.render('store/index',{registerHouse:registerHouse,pagetitle:'this is the home page'});
  });
}

const getHomes = (req, res, next) => {
  const homeId = req.params.homeId;
  Data.findById(homeId, (home) => {
      res.render("store/home-details", { home: home });
  });
};
const postAddtofav=(req,res,next)=>{
  console.log("come to add to favourite",req.body);
  res.redirect("/fav-list")
}


exports.postAddtofav=postAddtofav;
exports.getHomes=getHomes;
exports.indexvalue=indexvalue;
exports.homepage=homepage;
exports.favlist=favlist;
exports.booking=booking;