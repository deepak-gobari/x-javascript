function sayMyName() {
  console.log("s");
  console.log("t");
  console.log("e");
  console.log("l");
  console.log("l");
  console.log("a");
  console.log("r");
}
// sayMyName();

// function addTwoNumbers(num1, num2) { // parameters
//   console.log(num1 + num2);
// }
// addTwoNumbers(2, 3); // arguments

function addTwoNumbers(num1, num2) { // parameters
  const result = num1 + num2;
  return result;
}
const result = addTwoNumbers(2, 3); // arguments
// console.log("Result: ", result);

const loginUserMessage = (userName = "foo") => {
  // if (!userName) {
  //   console.log("please enter a 'username'.");
  //   return;
  // }
  return `${userName} just logged in!`;
}
// console.log(loginUserMessage("starfall"));
// console.log(loginUserMessage());



function calculateCartPrice(num1, ...num2) {
  return num2;
}
// console.log(calculateCartPrice(200, 300, 400));

const user = {
  username: "starfall",
  price: 99,
}
function handleObject(anyObject) {
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user);

const colors = ["red", "yellow", "blue"];
function returnValueOfPlace(arr, i = 1) {
  return arr[i - 1];
}
// console.log(returnValueOfPlace(colors, 3));





// 'this'
// refers to the object that calls the function.
// regular: 'this' depends on how the function is called.
// arrow: 'this' is lexically bound - inherits 'this' from the  parent scope.

// brower scope - undefined - window object
// node scope - {}empty

const user = {
  username: "starfalldex",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome`)
    console.log(this)
  },
  otherInfo: {
    fullName: "stellar frost",
    farewellMessage: function () {
      console.log(`${this.fullName}, Goodbye`)
      console.log(this)
    }
  }
}
// user.welcomeMessage();
// user.username = "foo";
// user.welcomeMessage();
// user.data.farewellMessage()

function regularFunction() {
  let username = "starfaldex";
  console.log("regular function")
  console.log(this)
}
// regularFunction();

const arrowFunction = () => {
  console.log("arrow function")
  console.log(this)
}
// arrowFunction();

const addTwo = (num1, num2) => {
  return num1 + num2
}
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => ({ username: "starfalldex" });

console.log(addTwo(4, 6));



// Immediately Invoked Function Expression (IIFE)

// syntax: (function define)(execution: argument);
// executed immediately and isolate variables from the global scope pollution
// always use ';'

// named iife
(function color() {
  console.log("1: color shown");
})();

// Anonymous arrow iife
((name) => console.log(`2: ${name} connected`))(`starfall`);

const hello = ((name) => (`3: hello color `))();
console.log(hello);