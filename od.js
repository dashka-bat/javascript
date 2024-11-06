//2)
// let n = 0;
// let a = "";
// while (n < 5) {
//   n = n + 1;
//   a = a + " *";
//   console.log(a);
// }

//1)
// let d = "";
// for (let c = 0; c < 5; c++) {
//   for (let j = 0; j < 5; j++) {
//     d += "* ";
//   }

//   d += "\n";
// }
// console.log(d);
// let c = "";
// for (let i = 0; i < 5; i++) {
//   for (let d = 0; d < 5; d++) {
//     c += " *";
//   }
//   c += "\n";
// }
// console.log(c);
// let f = "";
// k = 5;
// for (let g = 1; g < 5; g++) {
//   for (let l = 1; l < k - g; l++) {
//     f += " *";
//   }
//   f += "\n";
// }
//console.log(f);
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let star = "* ";
//   let space = "  ";
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }
// let n = 5;
// star = "";
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     star += " ";
//   }
//   for (let j = 0; j < i; j++) {
//     star += "* ";
//   }
//   console.log(star);
//   star = "";
// }
let n = 5;
star = "";
for (let i = 0; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    star += " ";
  }
  for (let j = 0; j < i; j++) {
    star += "* ";
  }
  console.log(star);
  star = "";
}
