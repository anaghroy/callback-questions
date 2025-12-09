//section-1: Create a user object that stores name and email and has a login method which prints "User logged in".
// imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log(`${this.name} logged in`);
  }
}
let user1 = new User("Anagh", "a@a.com");
let user2 = new User("Rohan", "r@ra.com");
let user3 = new User("Sayan", "Sayan@Sayan.com");
user1.login();

// Create a product object that stores name and price and has a method which returns the final price after discount.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  finalPrice(discountPercent) {
    const discountAmount = (discountPercent / 100) * this.price;
    return this.price - discountAmount;
  }
}
let product1 = new Product("Book", 3287);
console.log(product1.finalPrice(20));

// section-2: Constructor and this keyword
// Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
// inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.

class Student {
  constructor(name, rollnumber) {
    this.name = name;
    this.rollnumber = rollnumber;
  }
  introduce() {
    console.log(
      `My name is ${this.name} and my roll number is ${this.rollnumber}.`
    );
  }
}
let person1 = new Student("Sayan Kumar Das", 1540381);
person1.introduce();

// Create an object with two methods.
// one method using a normal function
// one method using a arrow function
const person = {
  name: "Anagh",
  //Normal function method
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  // Arrow function method
  sayBye: () => {
    console.log(`Goodbye!`);
    // Arrow function does NOT get its own "this", so cannot use this.name.
  },
};
person.sayHello();
person.sayBye();
//Constructor Functions and prototypes

//Create a user constructor function(do not use class syntax).

//Add a loginmethod in two ways:
// First, inside the constructor
function Async(name, email) {
  this.name = name;
  this.email = email;
  // Method inside constructor
  this.login = function () {
    console.log(`${this.name} logged in`);
  };
}
let u1 = new Async("Anagh", "a@a.com");
u1.login();
// Then, move the mothod to the prototype
function Async(name, email) {
  this.name = name;
  this.email = email;
  // Method on prototype (shared by all objects)
  Async.prototype.login = function () {
    console.log(`${this.name} logged in`);
  };
}
let u2 = new Async("Anagh", "a@a.com");
u1.login();

// Create two User objects and compare their login methods using equality.

// Section - 3: call, apply, bind
// Create a function that prints this.name
// Create an object that contains a name property.

function printName(a, b) {
  console.log(this.name, a, b);
}
class Person {
  constructor(name) {
    this.name = name;
  }
}
let obj = new Person("Anagh");
// Use call to run the function using the object
printName.call(obj, 1, 2);
// Use apply to run the function using the object
printName.apply(obj, [1, 2]);
// Use bind to create a new function and then call
const newFunc = printName.bind(obj, 1, 2);
newFunc();

/********** SET-2 *******/
//SECTION 1: OOPS Thinking with Objects
// 1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 2.	Add one more method to the same object that increases the price by 10 percent.
// 3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.
let laptop = {
  brand: "DEll",
  price: 50000,
  start() {
    console.log("Laptop started");
  },
  increasePrice() {
    this.price = this.price * 1.1;
  },
};
console.log(laptop);
laptop.start();
laptop.increasePrice();
console.log(laptop.price);
// Repetition of code- This will create 10 copies for each objects

// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  showDetails() {
    console.log(`Name: ${this.name}, Salary: ${this.salary}`);
  }
}
let emp1 = new Employee("Anagh", 100000);
let emp2 = new Employee("Rohan", 80000);
let emp3 = new Employee("Sayan", 120000);

// Show details
emp1.showDetails();
emp2.showDetails();
emp3.showDetails();

// Modify one (only emp1 changes)
emp1.salary = 150000;
emp1.showDetails();
emp2.showDetails();
emp3.showDetails();
//1. Removes duplicate code, 2. Ensures consistent structure, 3.Makes your code cleaner and scalable, 4.Easy to maintain, 5. Methods are stored in prototype → saves memory
// ⸻

// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.
class BankAccount {
  constructor(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    const bank = (this.balance += amount);
  }
}
let Account1 = new BankAccount("Anagh", 25897000000);
let Account2 = new BankAccount("Roy", 465879821236);

// Deposit only in Account1:
Account1.deposit(50000);
console.log(Account1.balance);
console.log(Account2.balance);

//Because each object created from a class has its own separate memory space.
// A class is just a template, but each instance stores its own data.
// ⸻

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

const profile = {
  username: "Anagh",
  printName() {
    console.log(this.username);
  },
};
profile.printName(); //Output: "Anagh"
//Because when calling profile.printName(), this = profile object.
let newfunc = profile.printName();
newFunc(); //Because now the function is called without any object.
// ⸻

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.
class Vehicle {
  constructor(type, wheels) {
    this.type = type;
    this.wheels = wheels;
    // Method inside constructor
    this.describe = function () {
      console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
    };
  }
}
let v1 = new Vehicle("Car", 4);
let v2 = new Vehicle("Bike", 2);
v1.describe();
v2.describe();
// When method is inside the constructor, every object gets its own copy of the function.
// If you create 1000 vehicles, you get 1000 copies of the same function.

// Move the method to Vehicle.prototype
function Vehicle2(type, wheels) {
  this.type = type;
  this.wheels = wheels;
}
// prototype
Vehicle.prototype.describe = function () {
  console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
};

let v3 = new Vehicle2("Car", 4);
let v4 = new Vehicle2("Bike", 2);

// ⸻

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.

function showBrand() {
  console.log(this.brand); //There "This" is refer to window
}
let obj3 = { brand: "Apple" };
let obj4 = { brand: "Samsung" };
showBrand(); //Undefined, window so the function cannot access brand.
showBrand.call(obj3); //Forcing this to refer to a specific object.
showBrand.call(obj4); //Forcing this to refer to a specific object.
// ⸻

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.
function introduce(city, role) {
  console.log(
    `I am ${this.name} from ${city} and my role in this company is ${role}`
  );
}
let obj5 = { name: "Anagh" };
introduce.apply(obj5, ["Assam", "Full Stack Developer"]);
// call()-pass arguments normally, but apply() pass arguments as an array
// ⸻

// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.

function greet(name) {
  console.log(`Hello ${this.name}`);
}
let person6 = { name: "Anagh Roy" };
let greetAnagh = greet.bind(person); // Bing() locks the this value forever
greetAnagh();
