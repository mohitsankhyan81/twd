const registeredHouse=[];

class Home{
  constructor(houseName,price,location,rating,url){
    this.houseName=houseName,
    this.price=price,
    this.location=location,
    this.rating=rating,
    this.url=url
  }

  save(){
    registeredHouse.push(this);
  }

  static fetchAll(){
    return registeredHouse;
  }

};

module.exports=Home;