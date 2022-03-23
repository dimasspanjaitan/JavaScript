console.log("Hello World");

// JavaScript Variable
let _x = 5;
console.log(_x);
_x = 10;
console.log(_x);

const $y = 7;
console.log($y);
// $y = 10          ERROR!!!
// console.log($y)

// JavaScript String
const hello = "Hello",
  first = "Dimas",
  middle = "S",
  last = "Panjaitan";
const result = `Your full name is ${first + " " + middle + " " + last}`;
console.log(hello + " " + first);
console.log(result);

// JavaScript Number
const num = 3;
const num2 = 3.14;
const num3 = 3e5; // 3 * 10^5
const num4 = 3 / 0; // Infinity
console.log(num, num2, num3, num * num2, num3 / num, (num3 / num2) * num);
console.log(num4);

// JavaScript Object
const student = {
  firstName: "Jack",
  lastName: null,
  class: 10,
};

// Operator
// Mencari bilangan Prima
const bilangan = []
let prima = []

for (let bil=1; bil<=100; bil++) {
    bilangan.push(bil)
}

for(let i=1; i<=bilangan.length; i++){
    pembagi = 0
    for(let j=1; j<=i; j++){
        if(i%j == 0){
            pembagi += 1
        }
    }
    if(pembagi == 2){
        prima.push(i)
    }
}

console.log(prima)
console.log(prima.length)
