// // How to create a constructor function
// function Car(brand, model, year, color) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.color = color;
// }

// let car1 = new Car("BMW", "7 Series", 2024, "White");
// let car2 = new Car("Audi", "A6", 2021, "Black");
// console.log(car1);
// console.log(car2);

// function Person(firstName, lastName, age, isMember = false) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.isMember = isMember;

//   this.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// let person1 = new Person("Michael", "Kobru", 30);
// let person2 = new Person("Mark", "Smith", 25, true);
// let fullName = person1.getFullName();
// let fullName1 = person2.getFullName();
// console.log(person1);
// console.log(person2);
// console.log(fullName);
// console.log(fullName1);

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} by ${this.author} published in ${this.year}`;
  };
}

let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
let firstBookInfo = book1.getSummary();
console.log(firstBookInfo);

let book2 = new Book("1984", "George Orwell", 1949);
let secondBookInfo = book2.getSummary();
console.log(secondBookInfo);
