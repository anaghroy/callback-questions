// Write a function greetUser(name, callback) that prints "Hello, <name>" and then runs the callback.
function greetuser(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}
greetuser("Anagh", function () {
  console.log("Callback function executed!");
});
// Create a function displayResult(result) and pass it as a callback to another function that adds two numbers.

function displayResult(result) {
  console.log("The result is: ", result);
}
function addNumber(a, b, callback) {
  let sum = a + b;
  callback(sum);
}
addNumber(10, 20, displayResult);

// Make a function printMessage(callback) that waits 2 seconds using setTimeout then runs the callback.

function printMessage(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}
printMessage(function () {
  console.log("Printing in 2 seconds!");
});
// Write a function askQuestion(question, callback) where callback prints the answer.

function askQuestion(question, callback) {
  console.log(question);
  callback("This is the answer!");
}
askQuestion("What is your name?", function (answer) {
  console.log(answer);
});

//Create a function sayBye(callback) that prints "Goodbye!" and then runs the callback.

function sayBye(callback) {
  console.log("Hello");
  callback();
}
sayBye(function () {
  console.log("Goodebye!");
});
// Write a function notify(callback) that simply calls the callback.
function notify(callback) {
  callback();
}
notify(function () {
  console.log("Notify!");
});

// Make a function showNumber(num, callback) that prints the number and then runs the callback.
function showNumber(num, callback) {
  console.log(num);
  callback();
}
showNumber(2566, function () {
  console.log("callback executed!");
});

// Create a function welcomeUser(callback) that waits 1 sec (using setTimeout) and then calls the callback.
function welcomeUser(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}
welcomeUser(function () {
  console.log("welcomeUser callback executed!");
});

// Write a function printTwice(callback) that executes the callback two times.

function printTwice(callback) {
  callback();
  callback();
}
printTwice(function () {
  console.log("Callback two time!");
});

// Make a function startProcess(callback) that prints "Process started" and then calls the callback.
function startProcess(callback) {
  console.log("Process started");
  callback();
}
startProcess(function () {
  console.log("Callback is started!");
});

// Write a function logMessage(message, callback) that prints the message and then calls the callback.
function logMessage(message, callback) {
  console.log(message);
  callback();
}
logMessage("Hey my name is Anagh", function () {
  console.log("Callback onces again!");
});

// Create a function runLater(callback) that runs the callback after 500ms.
function runLater(callback) {
  setTimeout(() => {
    callback();
  }, 500);
}
runLater(function () {
  console.log("Timeout is over!");
});

// Write a function askName(callback) that calls the callback with your name as an argument.
function askName(callback) {
  callback("Anagh");
}
askName(function (name) {
  console.log(name);
});

// Make a function finish(callback) that prints "Done!" and then runs the callback.
function finish(callback) {
  console.log("Done!");
  callback("The work is done!");
}
finish(function (name) {
  console.log(name);
});

// Create a function sayHello(callback) that prints "Hello!" and then calls the callback.
function sayHello(callback) {
  console.log("Hello!");
  callback("The callback resume!");
}
sayHello(function (name) {
  console.log(name);
});

// Write a function printName(callback) that calls the callback with your name as a string.
function printName(callback) {
  callback("Anagh Roy");
}
printName(function (name) {
  console.log(name);
});

// Make a function executeNow(callback) that instantly runs the callback.
function executeNow(callback) {
  callback();
}
executeNow(function () {
  console.log("The callback is instantly executed");
});

// Create a function afterOneSecond(callback) that waits 1 second and then runs the callback.
function afterOneSecond(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}
afterOneSecond(function () {
  console.log("waits is over!");
});

// Write a function logFirst(callback) that logs "First" and then calls the callback.
function logFirst(callback) {
  console.log("Log first");
  callback();
}
logFirst(function () {
  console.log("Second callback runs!");
});

// Make a function trigger(callback) that simply runs the callback function.

function trigger(callback) {
  callback();
}
trigger(function () {
  console.log("Callback is triggered");
});

// Write a function doubleRun(callback) that calls the callback two times.
function doubleRun(callback) {
  callback();
  callback();
}
doubleRun(function () {
  console.log("Two times callback is running!");
});

// Create a function printAndRun(message, callback) that prints the message and then calls the callback.
function printAndRun(message, callback) {
  console.log(message);
  callback();
}
printAndRun("Go to callback!", function () {
  console.log("Callback is stramming!");
});

// Write a function giveValue(callback) that sends the number 100 to the callback.
function giveValue(callback) {
  callback(100);
}
giveValue(function (number) {
  console.log(number, "Message is sends!");
});
// Make a function done(callback) that prints "Task complete" and then runs the callback.
function done(callback) {
  console.log("Task complete");
  callback();
}
done(function () {
  console.log("The task is complete twice!");
});
// LEVEL 2 — Easy

// Create a function processArray(arr, callback) that applies the callback to each element.
let arr = [24, 365, 54, 58];
function processArray(arr, callback) {
  arr.forEach((element) => {
    callback(element);
  });
}
processArray(arr, function (element) {
  console.log(element);
});
// Write a function calculate(a, b, callback) where callback decides if you’ll add, subtract, multiply, or divide.
function calculate(a, b, callback) {
  callback(a, b);
}
calculate(18, 66, function (a, b) {
  console.log(a + b);
});
// Make a function fetchData(callback) that simulates a server request with setTimeout (1 sec) and then returns "Data Loaded".
function fetchData(callback) {
  console.log("Server is loading....");
  setTimeout(() => {
    callback();
  }, 1000);
}
fetchData(function () {
  console.log("Data Loaded!");
});

// Build a function repeatNTimes(n, callback) that calls the callback n times.
function repeatNTimes(n, callback) {
  for (let i = 1; i < n; i++) {
    callback(i);
  }
}
repeatNTimes(3, function (i) {
  console.log(`Iteration ${i}`);
});

// Create a function waitAndProcess(number, callback) that doubles the number after 1 second and sends it to callback.
function waitAndProcess(number, callback) {
  setTimeout(() => {
    number = number * 2;
    callback(number);
  }, 1000);
}
waitAndProcess(78, function (number) {
  console.log(`double the number ${number}`);
});

// Create a function transformString(str, callback) that passes the string to the callback and prints the transformed result.
function transformString(str, callback) {
  const result = callback(str);
  console.log(result);
}
transformString("Transform the string", function (str) {
  return str.toUpperCase();
});

// Write a function filterArray(arr, callback) that uses the callback to decide which elements to keep.
let filterarr = [34, 256, 145, 32, 154, 555];

function filterArray(arr, callback) {
  return arr.filter((element) => {
    return callback(element);
  });
}
let result = filterArray(filterarr, function (element) {
  return element > 100;
});
console.log(result);
// 3.

// Make a function compute(value, callback) that applies the callback to value and prints the returned result.
function compute(value, callback) {
  const result = callback(value);
  console.log(result);
}
compute(2222, function (value) {
  return value * 2;
});

// Create a function doAfterTwoSeconds(callback) that waits 2 seconds and then runs the callback with a message "Done in 2 seconds".

function doAfterTwoSeconds(callback) {
  setTimeout(() => {
    callback("Done in 2 seconds!");
  }, 2000);
}
doAfterTwoSeconds(function (message) {
  console.log(message.toUpperCase());
});
// Write a function repeat(n, callback) that runs the callback n times.
function repeatfor(n, callback) {
  for (let i = 1; i <= n; i++) {
    callback(i);
  }
}
repeatfor(5, function (i) {
  console.log(`Iteration: ${i}`);
});

// Make a function findElement(arr, callback) that returns the first element for which the callback returns true.
let allarr = [234, 32648, 2465, 3364, 8897];

function findElement(arr, callback) {
  return arr.find((element) => {
    return callback(element);
  });
}
let results = findElement(allarr, function (element) {
  return element > 1000;
});
console.log(results);

// Create a function processUser(name, age, callback) that sends both arguments to the callback.
function processUser(name, age, callback) {
  callback(name, age);
}
processUser("Anagh", 25, function (name, age) {
  console.log(name, age);
});

// Write a function modifyArray(arr, callback) that replaces each element of the array with the result of the callback.
let modifyarr = [565, 44412, 2465, 3364, 30021];

function modifyArray(arr, callback) {
  return arr.map((element) => {
    return callback(element);
  });
}
let modify = modifyArray(modifyarr, function (element) {
  return element > 1000;
});
console.log(modify);

// Make a function operate(a, b, callback) where the callback returns a number and operate prints the final result.
function operate(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}
operate(6697, 2147, function (a, b) {
  return a + b;
});

// Create a function runInOrder(cb1, cb2) that calls cb1 first and then cb2.
function runInOrder(cb1, cb2) {
  cb1();
  cb2();
}
runInOrder(
  function () {
    console.log("First callback");
  },
  function () {
    console.log("Second callback");
  }
);

// LEVEL 3 — Little Tricky

// Simulate an async login process:

// loginUser(username, password, callback)

// After 2 seconds, callback should return true if password is "1234", else false.
function loginUser(username, password, callback) {
  setTimeout(() => {
    if (password === 1234) callback(true);
    else callback(false);
  }, 2000);
}
loginUser("Anagh", 1234, function (status) {
  if (status) {
    console.log("Login successfull!");
  } else {
    console.log("Invalid username or password!");
  }
});

// Create a getUser(id, callback) function that:

// waits 1 second

// returns { id, name: "Anagh" } via callback.
function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Anagh" });
  }, 1000);
}
getUser(1024, function (user) {
  console.log(user);
});
// Write a function doTask(successCallback, errorCallback):

// Randomly decide success or failure (use Math.random()).
function doTask(successCallback, errorCallback) {
  let randomvalue = Math.floor(Math.random() * 10);

  if (randomvalue > 5) {
    successCallback("task completed successfully!");
  } else {
    errorCallback("Task failed!");
  }
}
doTask(
  function (msg) {
    console.log("SUCCESS: ", msg);
  },
  function (err) {
    console.log("ERROR: ", err);
  }
);

// Write sequence(callback1, callback2, callback3)

// callback1 runs

// then callback2

// then callback3
// but each with setTimeout of 1 second.
function sequence(callback1, callback2, callback3) {
  console.log("Fatching callback1...");
  setTimeout(() => {
    callback1();
  }, 1000);

  console.log("Fatching callback2...");
  setTimeout(() => {
    callback2();
  }, 2000);

  console.log("Fatching callback3...");
  setTimeout(() => {
    callback3();
  }, 3000);
}
sequence(
  function () {
    console.log("Callback 1 running...");
  },
  function () {
    console.log("Callback 2 running...");
  },
  function () {
    console.log("Callback 3 running...");
  }
);
// Implement a simple version of .map() using callbacks: function myMap(arr, callback) { ... }

// Write a function loadScript(url, callback) that:

// loads a script tag

// on "load" → run callback

// on "error" → show "Error loading script"

//15. Chain callback functions:

// first(callback)

// second(callback)

// third(callback)

// Each should print something and call the next.

function callback(firstcb, secondcb, thirdcb) {
  setTimeout(() => {
    firstcb();
  }, 3000);
  setTimeout(() => {
    secondcb();
  }, 3500);
  setTimeout(() => {
    thirdcb();
  }, 4000);
}
callback(
  function () {
    console.log("Fetching first callback...");
  },
  function () {
    console.log("Fetching second callback...");
  },
  function () {
    console.log("Fetching third callback...");
  }
);

//Create a function double(num, callback) that doubles a number and passes it to the callback.
function double(num, callback) {
  num = num * 2;
  callback(num);
}
double(54, function (result) {
  console.log(`The doubled value is: ${result}`);
});
//Write a function isEven(num, callback) that checks if a number is even and passes true/false to the callback.
function isEven(num, callback) {
  if (num % 2 === 0) {
    callback(true);
  } else {
    callback(false);
  }
}
isEven(45, function (result) {
  console.log(result);
});
isEven(10, function (result) {
  console.log(result);
});
// Create a function getLength(str, callback) that passes the length of a string to the callback.
function getLength(str, callback) {
  let str1 = str.length;
  callback(str1);
}
getLength("AnaghRoy", function (length) {
  console.log(length);
});
// Level 2: Array Callbacks

// Write a function sumArray(arr, callback) that calculates the sum of array elements and passes it to the callback.
let sumarr = [243, 655, 124.697, 366, 548];
function sumArray(arr, callback) {
  const sum = arr.reduce((total, value) => {
    return total + value;
  }, 0);
  callback(sum);
}
sumArray(sumarr, function (result) {
  console.log(`Total sum: ${result}`);
});
// Create a function findMax(arr, callback) that finds the maximum value in an array and passes it to the callback.
let findarr = [6666, 2201, 4550, 7778, 3336, 6998];
function findMax(arr, callback) {
  const max = Math.max(...arr);
  callback(max);
}
findMax(findarr, function (result) {
  console.log(`The maximum value is: ${result}`);
});

// Write a function countEvens(arr, callback) that counts even numbers in an array and passes the count to the callback.
//Using For method

let countarr = [2, 3, 5, 4, 8, 10, 44, 36, 57];
function countEvens(arr, callback) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  callback(count);
}
countEvens(countarr, function (result) {
  console.log(`Even numbers: ${result}`);
});
//Filter method
let countarr1 = [2, 3, 5, 4, 8, 10, 44, 36, 57];
function countEvens(arr, callback) {
  let count = arr.filter((element) => {
    return element % 2 === 0;
  }).length;
  callback(count);
}
countEvens(countarr1, function (result) {
  console.log(`Even numbers: ${result}`);
});

// Create a function mapArray(arr, callback) that applies the callback to each element and returns a new array.
function mapArray(arr, callback) {
  let mapped = arr.map((element) => {
    return callback(element);
  });
  return mapped;
}
let number = [1, 2, 3, 4, 5];
let doubled = mapArray(number, function (result) {
  return result * 2;
});
console.log(doubled);

// Level 3: Timing Callbacks

// Write a function delayMessage(message, seconds, callback) that waits for the specified seconds and then passes the message to the callback.
function delayMessage(message, seconds, callback) {
  setTimeout(() => {
    callback(message);
  }, seconds * 1000);
}
delayMessage("Hello after 2 seconds", 2, function (msg) {
  console.log(msg);
});
// Create a function countdown(n, callback) that counts down from n to 1, calling the callback with each number every second.
function countdown(n, callback) {
  let current = n;

  const timer = setInterval(() => {
    callback(current);
    current--;
    if (current < 1) {
      clearInterval(timer);
    }
  }, 1000);
}

countdown(5, function (num) {
  console.log(num);
});

// Write a function runAfterDelay(delay, callback) that runs the callback after the specified delay in milliseconds.
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay);
}
runAfterDelay(2000, function () {
  console.log("Runs after 200ms (2 seconds)");
});
runAfterDelay(3000, function () {
  console.log("Runs after 200ms (3 seconds)");
});
// Level 4: Practical Callbacks

// Create a function fetchUserData(userId, callback) that simulates fetching user data after 1 second and passes an object {id: userId, name: "User"} to the callback.
function fetchUserData(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: "User" });
  }, 1000);
}
fetchUserData(223405, function (data) {
  console.log(`The userId is: ${data.id}`);
  console.log(`The username is: ${data.name}`);
});

// Write a function processOrder(order, callback) that takes an order object, adds a processed: true property after 2 seconds, and passes it to the callback.
let myOrder = { id: 101, item: "Pizza", quantity: 2 };

function processOrder(order, callback) {
  setTimeout(() => {
    order.processed = true;
    callback(order);
  }, 2000);
}

processOrder(myOrder, function (obj) {
  console.log(obj);
});

// Create a function calculate(a, b, operation, callback) where operation is a callback that performs the calculation.
function calculate1(a, b, operation, callback) {
  const output = operation(a, b);
  callback(output);
}
calculate1(
  695,
  3,
  function (x, y) {
    return x * y;
  },
  function (result) {
    console.log(`Subtraction: ${result}`);
  }
);
