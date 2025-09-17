const Fav = require("../../model/fav");
const Data = require("../../model/home");

const storeval = (req, res, next) => {
  Data.fetchdata((registerhouse) => {
    console.log("This is the home page");
    console.log(registerhouse);
    res.render("store/storelist", { registerhouse: registerhouse });
  });
};

const gethomedetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Data.findbyid(homeId, (home) => {
    if (!home) {
      return res.status(404).send("Home not found"); // handle null case
    }
    res.render("store/details-list", { home: home });
  });
};

const favhouses = (req, res, next) => {
    Fav.getfav(favIds => {
        Data.fetchdata(allHomes => {
            const favHomes = allHomes.filter(home => favIds.includes(home.id));
            res.render('store/fav', { registerhouse: favHomes });
        });
    });
};

const postfavhomes = (req, res, next) => {
  Fav.addtofav(req.body.id, (err) => {
    if (err) {
      console.log("Error while marking fav", err);
    }
    res.redirect("/fav");
  });
  console.log("came to add to fav", req.body);
};

exports.postfavhomes = postfavhomes;
exports.favhouses = favhouses;
exports.gethomedetails = gethomedetails;
exports.storeval = storeval;
