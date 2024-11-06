/*let a = 2;
let b = 10;
let c = 4;
let d = 6;
if (a < b && a < c && a < d) {
  if (b < c && b < d) console.log(b);
} else if (c < d && c < b) console.log(c);
else if (d < b && d < c) console.log(d);
else if (b < a && b < c && b < d) {
  if (a < c && a < d) console.log(a);
} else if (c < d && c < a) console.log(c);
else if (d < a && d < c) console.log(d);
else if (c < a && c < b && c < d) {
  if (a < b && a < d) console.log(a);
} else if (b < a && b < d) console.log(b);
else if (d < b && d < c) console.log(d);
else if (d < a && d < b && d < c) {
  if (a < b && a < c) console.log(a);
} else if (b < a && b < c) console.log(b);
else if (c < a && c < b) console.log(c);*/
//
///
//array
////
//1
let favoritecolors = ["gray", " black", " green", "blue", "pink"];
console.log(favoritecolors);
favoritecolors[2] = "red";
console.log(favoritecolors);
//2
let levelscompleted = [true, false];
console.log(levelscompleted);
levelscompleted.push(true);

console.log(levelscompleted);
//3
let destinations = ["ger", " lager", " ger", "lager", "ger"];
console.log(destinations);
destinations.shift();
console.log(destinations);
destinations.unshift("new york");
console.log(destinations);
//4
let ages = [18, 21, 22, 20, 23, 36, 79];
console.log(ages);
for (let a = 0; a < ages.length; a++) {
  console.log(ages[a] + 5);
}
//5
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let sum = 0;
//1)
for (let index = 0; index < numbers.length; index++) {
  sum = numbers[index] + sum;
}
console.log("sum", sum);
//2
let biggest = numbers[0];
index = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > biggest) {
    biggest = numbers[i];
  }
}
console.log(biggest);
//3
let smallest = numbers[0];
index = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log(smallest);
//4
numbers.unshift(18000);
console.log(numbers);
//5
numbers.push(80093);
console.log(numbers);
//6
a = 0;
b = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    a++;
  } else {
    b++;
  }
}
console.log(a, b);

const n = 5;
let a = "";
while (n < 5) {
  n = n + 1;
  a = a + " *";
  console.log(a);
}
