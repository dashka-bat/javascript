let a = 3;
let b = 4;

//1
console.log(a > b);
//2
console.log(b > a);
//3
console.log(b >= a);
//4
console.log(a >= b);
//5
console.log(b == b);
//6
console.log(b === b);
//7
console.log(b !== b);
//8
console.log(b !== "b");
//9
console.log(b === "b");
//10
console.log(b == "b");
//11
console.log(b > a && 10 < 14);
//12
console.log(b > a && 10 > 12);
//13
console.log(b > a || 10 < 12);
//14
console.log(b > a || 10 > 12);
//15
console.log(b < a || 10 > 12);
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let seven = !(4 > 3 && 10 < 12); //false
let eight = !(4 > 3 && 10 > 12); //true
let nine = !(4 === "4"); //true
