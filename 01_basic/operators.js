// OPERATORS

/* 
Arithmetic: +, -, *, /, %, **, ++, --, etc.
Assignment: =, +=, -=, *=, /=, %=, **=, etc.
Comparison: ==, != , ===, !==, <, >, <=, >=, ?: ternary
Logical: &&, ||, !, ??: nullish coalesing
Bitwise: &, |, ~, ^, <<, >>, >>>
Type: typeof, instanaceof, in, etc
Ternary: ?
String: +: concatination 
Spread: ... 
*/

/* Arithmatic */
let a = 1;
let b = a++;
let c = ++a;
// console.log(a, b, c)

/* Comparision */
// true false true false false true
console.log(2 > 1, 2 < 1, 2 >= 1, 2 <= 1, 2 == 1, 2 != 1);
// true true
console.log("2" > 1, "02" > 1);
// false
console.log("1" === 1);
// strict check compare data type
// console.log("1" === 1);

/* avoid these */
// false false false true true
console.log(null > 0, null < 0, null == 0, null >= 0, null <= 0);
// false false false false false
console.log(undefined > 0, undefined < 0, undefined == 0, undefined >= 0, undefined <= 0);

// String and concatination
let str = "starfall" + " " + "dex";
// starfall dex 12 122 32
console.log(str, "1" + 2, "1" + 2 + 2, 1 + 2 + "2"); 