const registerhouse=[];

class Data{
  constructor(houseName,price,location,rating,url){
    this.houseName=houseName,
    this.price=price,
    this.location=location,
    this.rating=rating,
    this.url=url
  }
  save(){
    registerhouse.push(this);
  }
  static fetchdata(){
    return registerhouse;
  }
}

module.exports = Data;