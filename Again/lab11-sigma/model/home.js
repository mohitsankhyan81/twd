const registerhouse=[];

class Data{
  constructor(houseName,price,rating,location,url){
    this.houseName=houseName;
    this.price=price;
    this.rating=rating;
    this.location=location;
    this.url=url;
  }

  save(){
    registerhouse.push(this);
  }

  static fetchdata(){
    return registerhouse;
  }
}

module.exports=Data;