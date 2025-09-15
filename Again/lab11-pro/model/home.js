const fs=require('fs');
const path=require('path');
const rootdir=require('../util/path');

class Data{
  constructor(houseName,price,rating,url,location){
    this.houseName=houseName;
    this.price=price;
    this.rating=rating;
    this.url=url;
    this.location=location;
  }
  save(){
    this.id=Math.random().toString();
    Data.fetchdata((registerhome)=>{
      registerhome.push(this);
      const homedata=path.join(rootdir,'data','home.json');
      fs.writeFile(homedata,JSON.stringify(registerhome),error=>{
        console.log("no error",error);
      })
    })
  }

  static fetchdata(callback){
    const homedata=path.join(rootdir,'data','home.json');
    fs.readFile(homedata,(err,data)=>{
      callback(!err?JSON.parse(data):[]);
    })
  }

static findById(homeId, callback) {
  this.fetchdata((homes) => {
    const home = homes.find(h => h.id === homeId);
    callback(home||null);
  });
}
}

module.exports=Data;