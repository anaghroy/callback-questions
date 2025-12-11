// // Create a simple promise that resolves with "Success!" after 1 second.

let mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});
mypromise.then((result) => console.log(result));

// Create a promise that rejects with "Error occurred!" after 1 second.

let mypromise1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Error occurred!");
  }, 2000);
});
mypromise1
  .then((result) => console.log(result))
  .catch((result) => console.log(result));

//Create a function waitOneSecond() that returns a promise that resolves after 1 second with the message "Done waiting".

function waitOneSecond() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Done waiting...");
    }, 1000);
  });
}
waitOneSecond().then((result) => console.log(result));

//Create a function checkNumber(num) that returns a promise:

// Resolves with "Even number" if num is even
// Rejects with "Odd number" if num is odd

function checkNumber(num) {
  return new Promise((res, rej) => {
    if (num % 2 === 0) {
      res("Even number");
    } else {
      rej("Odd number");
    }
  });
}
checkNumber(4).then((msg) => console.log(msg));
checkNumber(5).catch((msg) => console.log(msg));

// Create a function divide(a, b) that returns a promise:
// Resolves with the result if b is not 0
// Rejects with "Cannot divide by zero" if b is 0
function divide(a, b) {
  return new Promise((res, rej) => {
    if (b !== 0) {
      res(a / b);
    } else {
      rej("Cannot divide by zero");
    }
  });
}
divide(66, 3)
  .then((msg) => console.log("Result: ", msg))
  .catch((msg) => console.log("Error: ", msg));

// Level 3: Sequential with Timing Display

// Timed execution tracker: Create three functions that resolve after different times:

// task1() - 1 second - "Task 1 done"
// task2() - 2 seconds - "Task 2 done"
// task3() - 1 second - "Task 3 done"
// Log the start time, then log each completion with elapsed time

function task1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("First timer execution");
    });
  });
}
function task2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Second timer execution");
    });
  });
}
function task3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Third timer execution");
    });
  });
}
async function TimerTracker() {
  try {
    const step1 = await task1();
    console.log(step1);
    const step2 = await task2();
    console.log(step2);
    const step3 = await task3();
    console.log(step3);
  } catch (error) {
    console.error("Something went wrong :", error);
  }
}
TimerTracker();
// Multi-stage game loading: Create functions:

// loadAssets() - 2 seconds - "Assets loaded (2s)"
// initializeGame() - 1 second - "Game initialized (1s)"
// startGame() - 1 second - "Game started (1s)"
// Display total loading time at the end

function loadAssets() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("🔖 Assest loaded (2s)");
    }, 2000);
  });
}
function initializeGame() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("👉 Game initialized (1s)");
    }, 1000);
  });
}
function startGame() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("🏑 Game started (1s)");
    }, 1000);
  });
}
async function multiStage() {
  console.log("🎮 Starting game loading...");

  const startTime = Date.now();
  try {
    const step1 = await loadAssets();
    console.log(step1);
    const step2 = await initializeGame();
    console.log(step2);
    const step3 = await startGame();
    console.log(step3);

    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000;

    console.log(`\n⏱️ Total loading time: ${totalTime} seconds`);
    console.log("🔖 Game ready to play!");
  } catch (error) {
    console.log("🔒 Something went wrong:", error);
  }
}
multiStage();

// Chain promises: Create a promise that:
// Resolves with 5
// In .then(), multiply by 2
// In the next .then(), add 10
// Log the final result (should be 20)

let promise = new Promise((res, rej) => {
  res(5);
});
promise
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    return num + 10;
  })
  .then((final) => {
    console.log(`Final result: ${final}`);
  });

// Simulate fetching data from an API: Create a function fetchUserData(userId) that:

// Returns a promise
// After 2 seconds, resolves with {id: userId, name: "John", age: 25}
// Use async/await to fetch and display the data

function fetchUserData(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: userId, name: "John", age: 25 });
    }, 2000);
  });
}
async function showData() {
  try {
    const result = await fetchUserData(101);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
showData();

// Level 4: Sequential with Error Handling

// Safe sequential execution: Create three functions:

// step1() - resolves after 1 second
// step2() - rejects with "Step 2 failed!" after 1 second
// step3() - resolves after 1 second
// Use try/catch to handle the error and log which step failed
function step1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("☑️ Completed after 1 seconds");
    }, 1000);
  });
}
function step2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("📕 Step 2 failed!");
    }, 1000);
  });
}
function step3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("🔰 Completed after 1 seconds");
    }, 1000);
  });
}
async function Safe() {
  try {
    const task1 = await step1();
    console.log(task1);
    const task2 = await step2();
    console.log(task2);
    const task3 = await step3();
    console.log(task3);
  } catch (error) {
    console.error("🔒 Something went wrong", error);
  }
}
// Safe()
// API call chain with fallback: Create functions:

// fetchUserData(id) - may reject with "User not found"
// fetchUserPosts(userId) - may reject with "Posts unavailable"
// fetchComments(postId) - may reject with "Comments unavailable"
// Handle each possible error appropriately
function fetchUserData(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const success = Math.floor(Math.random() * 10) > 0.3;
      if (success) {
        res({ id: id, name: "Anagh Roy", email: "anagh33@roy.com" });
      } else {
        rej("👤User not found");
      }
    }, 1000);
  });
}
function fetchUserPosts(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const success = Math.floor(Math.random() * 10) > 0.3;
      if (success) {
        res([
          { postId: 1, title: "First Post", userId: userId },
          { postId: 2, title: "Second Post", userId: userId },
        ]);
      } else {
        rej("🚩 Posts unavailable");
      }
    }, 1000);
  });
}
function fetchComments(postId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const success = Math.floor(Math.random() * 10) > 0.3;
      if (success) {
        res([
          { commentId: 1, title: "Greate post!", postId: postId },
          { commentId: 2, title: "Thanks for sharing", postId: postId },
        ]);
      } else {
        rej("🚩 Comments unavailable");
      }
    }, 1000);
  });
}
async function fetchData(userId) {
  console.log("🔄 Starting API call chain...\n");

  let userData;
  try {
    userData = await fetchUserData(userId)
    console.log("User data:", userData)
  } catch (error) {
    console.error("🎟️ Error fetching user:", error);
    console.log("🔄 Using fallback: Guest user");
    userData = { id: userId, name: "Guest User", email: "guest@example.com" };
  }

  let userPosts
  try {
    userPosts = await fetchUserPosts(userData.id)
    console.log("💗 User posts:", userPosts)
  } catch (error) {
    console.error("🎟️ Error fetching user:", error);
    console.log("🔄 Using fallback: Empty posts");
    userPosts = []
  }
}

async function fetchDataStrict(userId) {
  console.log("🔄 Starting strict API call chain...\n");
  
  try {
    const userData = await fetchUserData(userId);
    console.log("✅ User data:", userData);
    
    const userPosts = await fetchUserPosts(userData.id);
    console.log("✅ User posts:", userPosts);
    
    if (userPosts.length > 0) {
      const comments = await fetchComments(userPosts[0].postId);
      console.log("✅ Comments:", comments);
      
      console.log("\n✅ All data fetched successfully!");
    } else {
      console.log("⚠️ No posts to fetch comments for");
    }
    
  } catch (error) {
    console.error("\n💥 Chain stopped due to error:", error);
    console.log("🛑 Unable to continue without required data");
  }
}
async function fetchDataCollectErrors(userId) {
  console.log("🔄 Starting API call chain (collecting errors)...\n");
  
  const errors = [];
  let userData = null;
  let userPosts = [];
  let comments = [];
  
  // Try to fetch user
  try {
    userData = await fetchUserData(userId);
    console.log("✅ User data:", userData);
  } catch (error) {
    errors.push({ step: "fetchUserData", error });
    console.error("❌ User fetch failed:", error);
    userData = { id: userId, name: "Guest" };
  }
  
  // Try to fetch posts
  try {
    userPosts = await fetchUserPosts(userData.id);
    console.log("✅ User posts:", userPosts);
  } catch (error) {
    errors.push({ step: "fetchUserPosts", error });
    console.error("❌ Posts fetch failed:", error);
  }
  
  // Try to fetch comments
  if (userPosts.length > 0) {
    try {
      comments = await fetchComments(userPosts[0].postId);
      console.log("✅ Comments:", comments);
    } catch (error) {
      errors.push({ step: "fetchComments", error });
      console.error("❌ Comments fetch failed:", error);
    }
  }
  
  console.log("Errors encountered:", errors.length);
  if (errors.length > 0) {
    console.log("Failed steps:", errors.map(e => e.step));
  }
  console.log("Final data:", { userData, userPosts, comments });
}
console.log("=== APPROACH 1: Fallback for each error ===\n");
fetchData(123)
console.log("=== APPROACH 2: Fallback for each error ===\n");
fetchDataStrict(123)
console.log("=== APPROACH 3: Fallback for each error ===\n");
fetchDataCollectErrors(123)

// Payment processing with validation: Create functions:

// validateCard(cardNumber) - rejects if cardNumber < 1000
// chargeCard(amount) - rejects if amount > 1000
// sendReceipt(email) - always succeeds
// Handle errors and log appropriate messages

// Level 5: Complex Sequential Flows
// Sequential promises: Create three functions that each return a promise:

// step1() - resolves with "Step 1 complete" after 1 second
// step2() - resolves with "Step 2 complete" after 1 second
// step3() - resolves with "Step 3 complete" after 1 second
// Call them in sequence using async/await

function step1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Step 1 complete");
    }, 1000);
  });
}
function step2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Step 2 complete");
    }, 1000);
  });
}
function step3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Step 3 complete");
    }, 1000);
  });
}
async function showData() {
  try {
    const result1 = await step1();
    console.log(result1);

    const result2 = await step2();
    console.log(result2);

    const result3 = await step3();
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}
showData();

// Download simulation: Create three functions:

// downloadFile() - resolves with "File downloaded" after 2 seconds
// processFile() - resolves with "File processed" after 1 second
// uploadFile() - resolves with "File uploaded" after 2 seconds
// Execute them one after another and log each message

function downloadFile() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("File downloaded");
    }, 2000);
  });
}
function processFile() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("File processed");
    }, 1000);
  });
}
function uploadFile() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("File uploaded");
    }, 2000);
  });
}
async function showmsg() {
  try {
    const result1 = await downloadFile();
    console.log(result1);

    const result2 = await processFile();
    console.log(result2);

    const result3 = await uploadFile();
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}
showmsg();

// Cooking recipe: Create functions that simulate cooking steps:

// boilWater() - resolves with "Water boiled" after 3 seconds
// addPasta() - resolves with "Pasta added" after 1 second
// drain() - resolves with "Pasta drained" after 2 seconds
// Run them sequentially

function boilWater() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Water boiled");
    }, 3000);
  });
}
function addPasta() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Pasta added");
    }, 1000);
  });
}
function drain() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Pasta drained");
    }, 1000);
  });
}

async function recipe() {
  try {
    const cooking = await boilWater();
    console.log(`Proccess: ${cooking}`);

    const cooking2 = await addPasta();
    console.log(`Proccess: ${cooking2}`);

    const cooking3 = await drain();
    console.log(`Proccess: ${cooking3}`);
  } catch (error) {
    console.log(error);
  }
}
recipe();

// Number transformation chain: Create three functions:

// double(num) - takes a number, waits 1 second, resolves with num * 2
// addTen(num) - takes a number, waits 1 second, resolves with num + 10
// square(num) - takes a number, waits 1 second, resolves with num * num
// Start with 5, pass through all three functions, log final result
function double(num) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(num * 2);
    }, 1000);
  });
}
function addten(num) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(num + 10);
    }, 1000);
  });
}
function square(num) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(num * num);
    }, 1000);
  });
}
async function transformation() {
  try {
    const step1 = await double(5);
    console.log(`After double: ${step1}`);

    const step2 = await addten(step1);
    console.log(`After addten: ${step2}`);

    const step3 = await square(step2);
    console.log(`Final result: ${step3}`);
  } catch (error) {
    console.log(error);
  }
}
transformation();

// User registration flow: Create functions:

// validateEmail(email) - waits 1 second, resolves with "Email valid"
// createAccount(email) - waits 2 seconds, resolves with {id: 123, email: email}
// sendWelcomeEmail(user) - waits 1 second, resolves with "Welcome email sent"
// Execute the complete flow and log each step

function validateEmail(email) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Email Valid");
    }, 1000);
  });
}
function createAccount(email) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: 123, email: email });
    }, 2000);
  });
}
function sendWelcomeEmail(user) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Welcome email sent");
    }, 1000);
  });
}
async function registration(email) {
  try {
    const step1 = await validateEmail(email);
    console.log(step1);

    const step2 = await createAccount(email);
    console.log("Account created:", step2);

    const step3 = await sendWelcomeEmail(step2);
    console.log(step3);

    console.log("Resignation completed");
  } catch (error) {
    console.log(error);
  }
}
registration("roy@1roy.com");

// Order processing: Create functions:

// checkInventory(item) - waits 1 second, resolves with {item: item, available: true}
// processPayment(order) - waits 2 seconds, resolves with {...order, paid: true}
// shipOrder(order) - waits 1 second, resolves with {...order, shipped: true}
// Process an order through all steps

function checkInventory(item) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ item: item, available: true });
    }, 1000);
  });
}
function processPayment(order) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ ...order, paid: true });
    }, 2000);
  });
}
function shipOrder(order) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ ...order, shipped: true });
    }, 1000);
  });
}

async function processing() {
  try {
    const step1 = await checkInventory("laptop");
    console.log("Invertory:", step1);

    const step2 = await processPayment(step1);
    console.log("Payment:", step2);

    const step3 = await shipOrder(step2);
    console.log("Shipping:", step3);

    console.log("Order complete!", step3);
  } catch (error) {
    console.error(error);
  }
}
processing();

// CI/CD Pipeline simulation: Create functions:

// runTests() - 2 seconds - may fail
// buildProject() - 3 seconds
// deployToStaging() - 2 seconds
// runSmokeTests() - 1 second - may fail
// deployToProduction() - 2 seconds
// Stop pipeline if any step fails

function runTests() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const success = Math.floor(Math.random() * 10) > 0.3;
      if (success) {
        res("☑️ Tests passed");
      } else {
        rej("🎟️ Tests failed!");
      }
    }, 2000);
  });
}
function buildProject() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("☑️ Project built successfully");
    }, 3000);
  });
}
function deployToStaging() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(" 🔰 Deploy and stagging");
    }, 2000);
  });
}
function runSmokeTests() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const success = Math.floor(Math.random() * 10) > 0.2;
      if (success) {
        res("☑️ Smoke tests passed");
      } else {
        rej("❌ Smoke tests failed!");
      }
    }, 1000);
  });
}
function deployToProduction() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("☑️ Deploy to Production");
    }, 2000);
  });
}

async function pipeline() {
  console.log("🚀 Starting CI/CD Pipeline...\n");

  try {
    const step1 = await runTests();
    console.log("Step 1:", step1);

    const step2 = await buildProject();
    console.log("Step 2:", step2);

    const step3 = await deployToStaging();
    console.log("Step 3:", step3);

    const step4 = await runSmokeTests();
    console.log("Step 4:", step4);

    const step5 = await deployToProduction();
    console.log("Step 5:", step5);

    console.log("\n🎉 Pipeline completed successfully!");
  } catch (error) {
    console.error("\n💥 Pipeline failed:", error);
    console.log("🛑 Pipeline stopped. Fix the issues and try again.");
  }
}
pipeline();
