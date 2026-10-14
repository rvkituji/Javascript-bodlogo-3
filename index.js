///////////////////////////////
// const student = {
//     name : "Temuujin",
//     age: "21",
//     isStudent: "Yes"
// };
// console.log(student);
///////////////////////////////

// const friut = {
//   apple: 5,
//   banana: 6,
//   orange: 7,
// };
// console.log(friut);
////////////////////////////////

// const person = {
//     name: "Temuujin",
//     age: "21",
// };
// console.log(person.name);
///////////////////////////////

// const color = ["red", "green", "blue"];
// console.log(color[0]);
///////////////////////////////

// const product = {
//   name: "Devter",
//   price: "3500",
// };
// console.log(product.price);
///////////////////////////////

// const person = ["Temujin", "Maralhuu", "Mishka"];
// console.log(person[1]);
/////////////////////////////////

// const person = {
//   name: "Temujin",
//   age: "21",
// };
// console.log(`${person.name} ${person.age} nastai.`);
//////////////////////////////////

// const animals = ["dog", "cat", "rabiit", "horse"];
// console.log(animals.length);
////////////////////////////////////

// const numbers = [10, 20, 30, 40, 50];
// const lastIndex = numbers.length - 1;
// console.log(numbers[lastIndex]);
////////////////////////////////////

// const student = {
//     name: "Tuji",
//     age: "21",
//     grade: "5B"
// };
// console.log(student.grade);
////////////////////////////////////

// const fruit = ["apple", "banana", "orange"];
// fruit[1] = "grape";
// console.log(fruit);
////////////////////////////////////

// const person = {
//   name: "Tuji",
//   age: "21",
//   isAdult: "Yes",
// };
// person.isAdult = person.age >= 18;
// console.log(person);
////////////////////////////////////

// const books = ["math", "english"];
// books.push("programming");
// console.log(books);
/////////////////////////////////////

// const student = {
//   name: "Temujin",
//   age: "21",
//   grade: [],
// };
// student.grade.push("9");
// console.log(student);
//////////////////////////////////////

// const player = {
//   name: "Tuji",
//   score: 100,
// };

// if (player.score >= 100) {
//   player.score += 50;
// } else {
//   player.score += 10;
// }
// console.log(player.score);
/////////////////////////////////////

// const items = ["devter", "bal", "balluur"];
// items.pop("balluur");
// console.log(items);
//////////////////////////////////////

// const names = ["Bat", "Anu"];
// names.unshift("Tuji");
// console.log(names);
//////////////////////////////////////

// const lamp = {
//   isOn: false,
// };
// if (lamp.isOn === true) {
//   lamp.isOn = false;
//   console.log("Gerliig untraalaa");
// } else {
//   lamp.isOn = true;
//   console.log("Gerliig asaalaa");
// }
// console.log(lamp.isOn);
//////////////////////////////////////

// const names = ["Bat", "Tuji", "Aang"];
// names.shift("Bat");
// console.log(names);
/////////////////////////////////////

// const user = {
//   name: "tuji",
//   isVerified: "true",
//   temporarycode: "TUJI123",
// };
// if (user.isVerified) {
//   delete user.temporaryCode;
// } else {
//   console.log("Ta burtgelee bataalgaajuulna uu!");
// }
// console.log(user);
//////////////////////////////////////

// const product = {
//   name: "Note",
//   price: "2500",
//   quantity: "5",
// };
// const totalPrice = product.price * product.quantity;
// console.log(totalPrice);
//////////////////////////////////////

// const rectangle = {
//   width: 5,
//   height: 8,
// };
// const area = rectangle.width*rectangle.height;
// console.log(area);
////////////////////////////////////////

// const score = {
//   math: 80,
//   english: 90,
//   programming: 70,
// };
// const averageGrade = (score.math+score.english+score.programming)/3;
// console.log(averageGrade);
////////////////////////////////////////////

// const product = {
//   price: 50000,
//   discountPercent: 20,
// };
// const discountedAmount = (product.price * product.discountPercent) / 100;
// const discountedPrice = product.price - discountedAmount;
// if (discountedPrice > discountedAmount) {
//   console.log(discountedPrice);
// } else {
//   console.log("uldegdel hureltsehgui");
// }
// console.log(discountedPrice);
/////////////////////////////////////////////

// const account = {
//   owner: "Temuujin",
//   balance: 50000,
// };
// const withdrawAmount = 60000;
// if (account.balance >= withdrawAmount) {
//   console.log("Гүйлгээ амжилттай");
// } else {
//   console.log("Үлдэгдэл хүрэлцэхгүй", account.balance);
// }
//////////////////////////////////////////////

// const product = {
//   name: "bal",
//   stock: 0,
// };
// const pro = product.stock > 0 ? "belen baina" : "belen bhqu"
// console.log(pro);
////////////////////////////////////////////////

// const numbers = [15, 25, 10];
// console.log(numbers[0] + numbers[1] + numbers[2]);
/////////////////////////////////////////////////

// const scores = [80, 90, 100];
// console.log((scores[0]+scores[1]+scores[2])/3);
//////////////////////////////////////////////////

// const customer = {
//   money: 10000,
// };
// const product = {
//   price: 8000,
//   stock: 3,
// };

// if ((customer.money >= product.price, product.stock > 0)) {
//   console.log("Bolno");
// } else {
//   console.log("Bolohgui");
// }
///////////////////////////////////////////////////

// const student = {
//   name: "Sarah",
//   score: 85,
// };
// if (student.score >= 90) {
//   console.log("Mash sain");
// } else if (student.score >= 60 && student.score < 90) {
//   console.log("tentssen");
// } else {
//   console.log("tenseegui");
// }
/////////////////////////////////////////////////////

// const student = {
//   name: "tuji",
//   age: "21",
// };
// console.log("age" in student, "email" in student);
////////////////////////////////////////////////////

// const person = {
//   name: "tuji",
//   address: {
//     city: "Ulaanbaatar",
//     district: "BZD",
//   },
// };
// console.log(person.address.city);
//////////////////////////////////////////////////////

// const student = {
//   name: "Tuji",
//   scores: {
//     math: 60,
//     english: 80,
//   },
// };
// if (student.scores.math < 80) {
//   student.scores.math += 10;
// } else {
//   console.log("no need extra points");
// }
// console.log(student.scores.math);
/////////////////////////////////////////////////

// const names = ["Bat", "Anu"];
// const solih = names[0];
// names[0] = names[1];
// names[1] = solih;
// console.log(names);
//////////////////////////////////////////////

// const fruit = ["apple", "banana", "orange"];
// if (fruit.includes("banana")) {
//   console.log("banana baina");
// } else {
//   console.log("banana baihgui");
// }
//////////////////////////////////////////////////

// const students = ["Tuji", "Any", "Bold", "Sara"];
// console.log(students.indexOf("Bold"));
////////////////////////////////////////////////

// const order = {
//   product: {
//     price: 5000,
//     quantity: 3,
//   },
//   delivery: {
//     fee: 2500,
//   },
// };
// const totalPrice = order.product.price * order.product.quantity;
// if (totalPrice >= 20000) {
//   order.delivery.fee = 0;
// }
// order.total = totalPrice + order.delivery.fee;
// console.log(order.total);
/////////////////////////////////////////////////////////////

// const user1 = {
//   name: "bold",
//   age: "21",
// };
// const user2 = {
//   email: "bold@email.com",
//   city: "UB",
// };
// const user = Object.assign(user1, user2);
// console.log(user);
////////////////////////////////////////////////

// const cart = [];
// if (cart.length === 0) {
//   console.log("hooson");
// } else {
//   console.log("Hooson bish");
// }
///////////////////////////////////////////////

// const numbers = [35, 20];
// if (numbers[0] > numbers[1]) {
//   console.log(numbers[0]);
// } else if (numbers[0] < numbers[1]) {
//   console.log(numbers[1]);
// } else {
//   console.log("equal");
// }
///////////////////////////////////////////////

// const students = ["bat", "anu"];
// const newstudent = ["saraa"];
// if (!students.includes(newstudent)) {
//   students.push(newstudent);
// } else {
//   console.log("Burtgeltei ner");
// }
// console.log(students);
/////////////////////////////////////////////////

// const user1 = {
//     name:"anu",
//     age:"18"
// }
// const user2 = {
//     email: "anu@gmail.com",
//     city: "Darkhan"
// }
// const user = {...user1, ...user2};
// console.log(user);
///////////////////////////////////////////////

// const groupA = ["bat", "anu"];
// const groupB = ["bold", "saraa"];
// const allStudents = groupA.concat(groupB);
// console.log(allStudents);
/////////////////////////////////////////////

// const original = [10, 20, 30];
// const copy = [...original];
// copy[0] = 99;
// console.log("original", original);
// console.log("copy", copy);
//////////////////////////////////////////

// const numbers =  [10, 20, 30, 40 ,50]
// const newnumbers = numbers.slice(1, 4);
// console.log(newnumbers);
///////////////////////////////////////

// const user = {
//   name: "sara",
//   age: "21",
//   email: "sara@gmail.com",
// };
// const pro = {
//   name: user.name,
//   age: user.age,
// };
// pro.name = "Tuji";
// console.log("pro.name", pro.name);
// console.log("user.name", user.name);
/////////////////////////////////////////

// const colors = ["red", "green", "blue", "yellow"];
// colors.splice(1, 1);
// console.log(colors);
/////////////////////////////////////////

// const days = ["davaa", "lhagva"];
// days.splice(1, 0, "Mygmar")
// console.log(days);
////////////////////////////////////////

// const words = ["I'm",  "learning",  "Javasript"];
// const sentence = words.join(" ");
// console.log(sentence);
///////////////////////////////////////

// const students = [
//   {
//     name: "tuji",
//     score: 750,
//   },
//   {
//     name: "bold",
//     score: 90,
//   },
// ];
// students[0].score += 10;
// if (students[1].score >= 90) {
//   console.log("bold mash sain");
// } else {
//   console.log("bold hiceeh heregtei");
// }
// console.log("First student's point:", students[0].score);
////////////////////////////////////////////////////////