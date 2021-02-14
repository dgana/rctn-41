class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Employee extends Person {
  doWork() {
    return this.name + " is working";
  }
}

class CleaningService extends Employee {
  doClean() {
    return this.name + " is cleaning";
  }
}

let scott = new CleaningService("Scott");
console.log(scott.getName());
console.log(scott.doWork());
console.log(scott.doClean());
