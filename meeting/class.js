// SCHOOL
// PERSON
// TEACHER, STUDENT

class Person {
  name = "";
  age = 0;
  height = 0;
}

class Teacher {
  constructor(name, age, height, subjects) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.subjects = subjects;
  }
  name = "";
  age = 0;
  height = 0;
  salary = 20000;
  subjects = [];
}

class Student {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  name = "";
  age = 0;
  height = 0;
  tutionFee = 10000;

  increaseTutionFee(addFee) {
    this.tutionFee += addFee;
  }
}

let karim = {
  name: "karim",
  age: 23,
  height: 5.6,
  tutionFee: 10000,
  sayHello: function () {
    console.log("helloooo from karim");
  },
};

karim.sayHello();

//instantiate a class
// instance
//rahim is an object, rahim is an instance of the Student class
let rahim = new Student("rahim", 23, 5.8);
rahim.increaseTutionFee(2000);
let masud = new Student("masud", 26, 5.3);
masud.increaseTutionFee(5000);

let abdulKader = new Teacher("abdulKader", 45, 5.6, ["bangla", "english"]);

let abdulKaderJson = JSON.stringify(abdulKader);
let result = JSON.parse(abdulKaderJson);
console.log(abdulKaderJson);

console.log("rahim", rahim);
console.log(masud);
console.log(abdulKader);
