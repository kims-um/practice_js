class kims {
  constructor(age) {
    this.age = age;
  }
}

class user extends kims {
  constructor(age, brand) {
    super(age);
    this.brand = brand;
  }
}

const cool = new user(26, "kims");
console.log(cool.age);