// 1 ПЕРЕМЕННЫЕ------------------------------------------
//; не обязательно

//var name = "Misha"; //стараться не пользоваться
//const lastName = "Capral"; //string
//let ageOne = 26; //number
//const isProgramer = true; //boolean

//название переменных
//const _vip = "private";
//const $ = "value";
//const Num5 = "5";
//const 5Num - error
//const if - error

//name = "Vasya";
//console.log(name);
//const age = 22;

// 2 МУТИРОВАНИЕ-----------------------------------------
//+ конкатирование

//console.log("Имя человека: " + firstName + ", возраст человека: " + age);
//console.log(age.toString());

//const firstName = prompt("Enter name");
//alert("hello, " + firstName + " " + lastName);

// 3 ОПЕРАТОРЫ------------------------------------------

// let currentYear = 2021;
// const birthYear = 1998;
// const age = currentYear - birthYear;
// console.log(age);

// const a = 10;
// const b = 5;
// let c = 32
// c = c + a
// c+=a

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(++currentYear);
// console.log(currentYear++);
// console.log(c)

// 4 ТИПЫ ДАНЫХ------------------------------------------
//примитивные тиы данных

// const isProgramer = true;
// const name = "Misha";
// const age = 22;
// let x;

// console.log(typeof isProgramer); // boolean
// console.log(typeof name); //string
// console.log(typeof age); //number
// console.log(typeof x); //undefined
// console.log(typeof null); // object
// console.log(null); //null

// 5 ПРИОРИТЕТ ОПЕРАТОРОВ--------------------------------
// const fullAge = 22;
// const birthYear = 1998;
// const currentYear = 2021;

// const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge);

// 6 УСЛОВНЫЕ ОПЕРАТОРЫ----------------------------------

//const courseStatus = "pending"; //ready, fail, pending

// if (courseStatus === "ready") {
//   console.log("kurs are redy");
// } else if (courseStatus === "pending") {
//   console.log("kurs in proces of developing");
// } else {
//   console.log("kurs are failed");
// }

// const isReady = true;
// if (isReady) {
//   console.log("its true");
// } else {
//   console.log("its false");
// }

// //Тернарное выражение
// isReady ? console.log("its true") : console.log("its false");

// 7 БУЛЕВАЯ ЛОГИКА--------------------------------------

//true && true - true
//true && false - false
//false || true - true
//!true - false
//!!true - true

// 8 ФУНКЦИИ---------------------------------------------

// function calculateAge(year) {
//   return 2020 - year;
// }

// const myAge = calculateAge(1993);
// console.log(myAge);

// function squareNumb(userNumb) {
//   let x = userNumb * userNumb;
//   return x;
// }
// const square = squareNumb(myAge);
// console.log(square);

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);

//   if (age > 0) {
//     console.log("a man, who calls " + name + " has " + age + " years");
//   } else {
//     console.log("this is a future");
//   }
// }

// logInfoAbout("Misha", "2022");

// 9 МАССИВЫ---------------------------------------------

//const cars = ["Mazda", "Mercedess", "Ford"];
//const cars = new Array("Mazda", "Mercedess", "Ford") -old coding
// cars[0] = "Porsche";
// cars[3] = "Mazda";
// cars[cars.length] = "Vaz";

// 10 ЦЫКЛЫ----------------------------------------------
//const cars = ["Mazda", "Mercedess", "Ford"];

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   console.log(car);
// }

// for (let car of cars) {         //for of
//   console.log(car);
// }

// 11 ОБЪЕКТЫ--------------------------------------------

// const person = {
//   firstName: "Misha",
//   lastName: "Capral",
//   year: 1998,
//   languages: ["ru", "en", "ua"],
//   hasWife: false,
//   greet: function () {
//     console.log("greet from person");
//   },
// };

// console.log(person);
// console.log(person.firstName);
// person.greet();

// const key = "languages";
// console.log(person[key]);
// person.hasWife = true;
// person.isProgrammer = true;
// console.log(person);
