const path=require('path');
const rootdir=require('../util/home');
const fs=require('fs');
const home = require('../util/home');
class Data{
  constructor(houseName,price,rating,location,url){
    this.houseName=houseName;
    this.price=price;
    this.rating=rating;
    this.location=location;
    this.url=url;
  }

  save(){
    this.id=Math.random().toString();
    Data.fetchdata((registerhouse)=>{
      registerhouse.push(this);
      const home=path.join(rootdir,"data","data.json");
      fs.writeFile(home,JSON.stringify(registerhouse),error=>{
        console.log("no error",error);
      })
    })

  }
  static fetchdata(callback){
    const homedata=path.join(rootdir,"data","data.json");
    fs.readFile(homedata,(err,data)=>{
      callback(!err?JSON.parse(data):[])
    })
  }

  static findbyid(homeId,callback){
    this.fetchdata((homes)=>{
      const home=homes.find(h=>h.id===homeId);
      callback(home||null);
    })
  }
}

module.exports=Data;