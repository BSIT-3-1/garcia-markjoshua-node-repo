let x= 5;
let str = "";

function isOddOrEven(numberToCheck) {
const isOdd = numberToCheck % 2 != 0;
  if (isOdd) return console.log(`The number ${numberToCheck} is odd`);

 else return console.log(`The number ${numberToCheck} is even`);

 return console.log(`The number ${numberToCheck} is ${numberToCheck % 2 != 0 ? "odd" : "even"}.`)}

isOddOrEven(x);
for (let i = 0; i <= x; i++) {
  for (let j = x; j > i; j--) {
    str += " ";}
  for (let k = 0; k < i * 2 - 1; k++) {
    str += "*";}
str += "\n";}

for (let i = 1; i <= x - 1; i++) {
  for (let j = 0; j < i; j++) {
    str += " ";}
for (let k = (x - i) * 2 - 1; k > 0;
 k--) {str += "*";}
  str += "\n";}

console.log(str);

console.log("Mark Joshua Garcia");
console.log("Diamond Shape");
