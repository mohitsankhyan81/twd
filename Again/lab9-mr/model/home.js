const path=require('path');
const fs=require('fs');
const rootdir=require('../util/path');

class Data{
  constructor(houseName,price,location,rating,url){
    this.houseName=houseName,
    this.price=price,
    this.location=location,
    this.rating=rating,
    this.url=url
  }

  save(){
    Data.fetchdata(registerhouses=>{
      registerhouses.push(this);
      const homedata=path.join(rootdir,"data","data.json");
      fs.writeFile(homedata,JSON.stringify(registerhouses),error=>{
        console.log("no error",error);
      })
    })
  }

  static fetchdata(callback){
    const homedata=path.join(rootdir,"data","data.json");
    fs.readFile(homedata,(err,data)=>{
      callback(!err?JSON.parse(data):[]);
    })
  }
}

module.exports=Data;