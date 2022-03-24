function soundMaker(sound, times) {
  function makeSound() {
    console.log(`${sound}`);
  }

  for (let i = 0; i < times; i++) {
    makeSound();
  }
}

function soundMaker(sound, times) {
  function makeSound() {
    console.log(`${sound}`);
  }

  for (let i = 0; i < times; i++) {
    makeSound();
  }
}

// function User(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
// }

// class User {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
//   newYear() {
//     this.age += 1;
//   }
//   years(num) {
//     for (let i = 0; i < num; i++) {
//       this.newYear();
//     }
//   }
//   static printCrap() {
//     console.log("I print what I want");
//   }
// }

// const james = new User("james", 13, "james.com")
// console.log(james)
// james.years(4);
// console.log(james)
// User.printCrap()

// class Meal {
//   constructor(meat, vegtable, carb) {
//     this.meat = meat;
//     this.vegtable = vegtable;
//     this.carb = carb;
//   }
// }

// const meal_05 = new Meal("steak", "brussel sprouts", "baked potato")
// console.log(meal_05.meat)

function sum(x, y) {
  return x + y;
}

const sum = (x, y) => x + y

