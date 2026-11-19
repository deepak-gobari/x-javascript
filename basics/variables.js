// VARIABLE
// variable in javascript can take any data type
/* const, let, var */

/* declaration  */
// modern JS: Prefer not to use 'var'
var a;
let b;
const c = 3;
/* assignment */
a = 1;
b = 2;
// c = 4; change is not allowed

/* example */
let accountState;
let accountEmail = "stellar@foo.bar";
const accountID = 123;

accountEmail = "factor@foo.bar";

console.log(accountID);
console.table([
  accountState,
  accountEmail,
  accountID,
]);

/*not a good practice*/
city = "abcCity";