const fs=require('fs');
const path=require('path');
const rootdir=require('../util/path');
    const homedata=path.join(rootdir,"data","data.json");

class Data{
  constructor(houseName,price,location,rating,url){
    this.houseName=houseName,
    this.price=price,
    this.location=location,
    this.rating=rating,
    this.url=url
  }

  save(){
    this.id=Math.random().toString();
    Data.fetchdata((registerHouse)=>{
      const homedata=path.join(rootdir,"data","data.json");
      registerHouse.push(this);
      fs.writeFile(homedata,JSON.stringify(registerHouse),error=>{
        console.log("no error in this code",error);
      });
    });
  }

  static fetchdata(callback){

    fs.readFile(homedata,(err,data)=>{
      callback(!err?JSON.parse(data):[]);
    })
  }

static findById(homeID, callback) {
  this.fetchdata((homes) => {
    const home = homes.find(h => h.id === homeID);
    callback(home||null);
  });
}
};


module.exports=Data;