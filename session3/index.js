class Car {
  constructor(brand, something) {
    this.carname = brand;
    this.something = something;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, something, mod) {
    super(brand, something);
    this.mod = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let mycar = new Model("Ford", "Something", "Mustang");
console.log(mycar.show());
