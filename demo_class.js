class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  door(status) {
    console.log(`${this.name} is ready ${status}`);
  }
}

const car1 = new Car('toyota', 2007);
console.log(car1);

car1.door('haiya');
