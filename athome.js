// let a = 0;
// while (a < 37) {
//   if (a % 5 === 0) console.log(a);
//   a = a + 1;
// }
//23
// let a = 4812;
// let digits;
// let n = 1;
// while (a > 0) {
//   digits = a % 10;
//   if (digits % 2 == 0) {
//     n = n * digits;
//   }
//   a = Math.floor(a / 10);
// }
// console.log(n);
let n = 7;
while (n > 0)
  if (n % 2 == 0) {
    console.log(n / 2);
  } else if (n % 2 == 1) {
    console.log(n * 3 + 1);
  }
n = 1;
