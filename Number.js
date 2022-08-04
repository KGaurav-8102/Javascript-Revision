//for writting one billion

let bil = 1000000;
let bil1 = 1_00_00_00;
let bil2 = 1e6;

//toString(base)

let num = 255;

console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

//Rounding

let nums = 1.234567;

console.log(Math.round(nums * 100) / 100);
console.log(nums.toFixed(2));