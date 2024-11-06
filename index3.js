/*let count = 0;
while (count < 10) {
  console.log(count);
  count = count + 1;
}*/
/*let count1 = 5;
while (count < 11) {
  console.log(count);
  count = count + 1;
}*/
/*let ct = 0;
while (ct < 10) {
  console.log("hello");
  ct = ct + 1;
}*/
/*let ct = 0;
while (ct < 11) {
  console.log(ct);
  ct = ct + 1;
}*/
/*let count = 0;
let cs = 0;
while (cs < 20) {
  count = count + 1;
  cs = cs + count;
  console.log("3"cs);
}*/
/*let ct = 0;
while (ct < 20) {
  ct = ct + 1;
  if (ct % 2 === 1) console.log("4"ct);
}*/
/*let count = 0;
while (count < 20) {
  count++;
  console.log("4"count);
  count = count + 1;
}*/
/*let number = 4;
let num2 = 1;
let factorial = 1;
while (number >= num2) {
  factorial = factorial * number;
  number--;
}
console.log(factorial);
*/
/*let n = 10;
let fib1 = 0;
let fib2 = 1;
let nextterm = 0;
while (nextterm <= n) {
  console.log(nextterm);
  fib1 = fib2;
  fib2 = nextterm;
  nextterm = fib1 + fib2;
}*/
/*Every 10 loops, print out: Checkpoint! and the loop number
On loop 50 print out ONLY: Half way there!
On the final loop (100) print out ONLY: You made it!
AFTER the loop is done, print out: All, done!*/
/*let number = 10;
let loop = 10;
while (loop < 100) {
  console.log("Check point!10");
  loop = loop + number;
  console.log("Check point!20");
  loop = loop + number;
  console.log("Check point!30");
  loop = loop + number;
  console.log("Check point!40");
  loop = loop + number;
  console.log(" Half way there!");
  loop = loop + number;
  console.log("Check point!60");
  loop = loop + number;
  console.log("Check point!70");
  loop = loop + number;
  console.log("Check point!80");
  loop = loop + number;
  console.log("Check point!90");
  loop = loop + number;
  console.log("You made it !");
  console.log("ALL, done!");
  loop = loop + number;
}
let num = 1;
while (i <= 100) {
  if (i % 100 === 0) {
    console.log("you made it !");
  } else if (i % 50 === 0) {
    console.log(" Half way there!", i);
  } else if (i % 10 === 0) {
    console.log("checkpoint!", i);
  }
  i++;
}
console.log("all done ")*/
/*1. Төсвийн хянагч (Budget Tracker)
Та өдөр тутмын зардлаа хянахыг хүсч байна. Таны төсөв буюу зарцуулах боломжтой мөнгөний хэмжээ $100 байна.
Ажлын өдрүүдэд (Даваа - Баасан) зардал $15 байх болно.
Амралтын өдрүүдэд (Бямба, Ням) зардал $25 байх болно.
Хэрэв  нийт зардал $800-аас илүү, гэхдээ $100-аас бага болвол "Таны нийт зардал 100$ руу ойртож байна шүү" гэж хэвлэ.
Хэрэв  нийт зардал $100 буюу төсвийн хязгаарт хүрсэн бол: "Та зардлын хязгаарт хүрлээ!" гэж хэвлээд давталтыг зогсоо.*/

/*2. Кофе шопын урамшууллын карт (Coffee Shop Punch Card)
Кофе шоп урамшууллын карттай бөгөөд 10 аяга кофе авсны дараа үнэгүй кофе авах боломжтой.
Худалдан авсан кофены тоогоор ажиллах давталт үүсгээрэй.
Худалдан авалт бүрт “Та … дахь кофегоо худалдан авлаа”  гэж хэвлэ.
3 дахь удаагийн худалдан авалт бүрийн дараа  "Танд үнэгүй бялуу бэлэглжу байна” гэж хэвлэ.
10 дахь худалдан авалтанд "Баяр хүргэе! Та үнэгүй кофе авлаа!" гэж хэвлэ.
Давталт дууссаны дараа: "Урамшууллын карт дууслаа!" гэж хэвлэ.*/
let coffe = 0;
let coffenumber = 0;
let unegui = 10;
while (coffe <= unegui) {
  if (coffenumber == 10) {
    console.log(coffenumber, "dahi coffe Баяр хүргэе! Та үнэгүй кофе авлаа ");
  } else if (coffe === 3) {
    console.log(coffenumber, "dahi coffe free cake");
  } else if (coffe === 6) {
    console.log(coffenumber, "dahi coffe free cake");
  } else if (coffe === 9) {
    console.log(coffenumber, "dahi coffe free cake");
  } else if (coffe <= unegui) {
    console.log(coffenumber, ")dahi coffe");
  }

  coffe++;
  coffenumber++;
}

console.log("Урамшууллын карт дууслаа");
