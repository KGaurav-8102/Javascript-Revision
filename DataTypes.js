//Datatypes

//Numbers
//Infinity
console.log(1 /0);

//Nan
 
console.log(NaN + 1);
console.log(NaN + 3);

//BigInt

let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

//String

let str = 'Hello';
let str2 = "single quotes are ok too!";
let str3 = `can embed another ${str}`;

console.log(str);
console.log(str2);
console.log(str3);

//embeded functionality quotes"BacktIcks"

let user = "john";

console.log(`Hello${user}`);

//Boolean value

let isGreater = 4 > 1;

console.log(isGreater);

//undefined

let age;
console.log(age);

//typeof

console.log(typeof undefined); // "undefined"

console.log(typeof 0); // "number"

console.log(typeof 10n); // "bigint"

console.log(typeof true);// "boolean"

console.log(typeof "foo"); // "string"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof Math); // "object"  (1)

console.log(typeof null); // "object"  (2)

console.log(typeof alert);