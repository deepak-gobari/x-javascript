/* Comparison or Relational operators is used in condition 
<, >, <=, >=, ==, ===
&&, || , !
*/

// if 
// SYNTAX -
/*
if (condition) {
  code to be executed if condition is true
}
*/
const isLoggedIn = true;
if (isLoggedIn) {
  console.log("executed")
}

// if else 
// SYNTAX -
/*
if (condition) {
  code to be executed if condition is true
} else {
  code to be executed if condition is false
}
*/
const temp = 30;
if (temp <= 40) {
  console.log("temperature less than 40");
} else {
  console.log("temperature greater than 40");
}

// if, else if
// SYNTAX -
/*
if (condition1) {
  code to be executed if condition1 is true
} else if (condition2) {
  code to be executed if condition1 is false and condition2 is true
} else {
  code to be executed if condition1 and condition2 is fals
}
*/
const balance = 1000;
if (balance > 44) console.log(`enough money`); // implicit scope
if (balance < 500) {
  console.log(`less than 500`)
} else if (balance < 750) {
  console.log(`less than 750`)
} else if (balance < 900) {
  console.log(`less than 900`)
} else if (balance < 1200) {
  console.log(`less than 1200`)
}

/* has scope : here: explicit */
const score = 3420;
if (score > 100) {
  const power = "fly";
  console.log(`user power ${power}`)
}
// console.log(`user power ${power}`) //error

const userLoggedIn = true, debitCard = true;
if (userLoggedIn && debitCard) console.log(`allow shopping`);

const googleLoggedIn = false, emailLoggedIn = true;
if (googleLoggedIn || emailLoggedIn) console.log(`allow to enter website`);

// ternary operator 
// SYNTAX - 
// condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('buy') : console.log(`don't buy`);


// switch case
// SYNTAX-
/*
switch (key) {
  case value:
    ---content---
    break;
  default:
    --- content---
    break;
}
*/

const month = 3;
switch (month) {
  case 1:
    console.log(`${month}: January`)
    break;
  case 2:
    console.log(`${month}: February`)
    break;
  case 3:
    console.log(`${month}: March`)
    break;
  case 4:
    console.log(`${month}: April`)
    break;
  default:
    console.log(`${month} is not a month`)
    break;
}