function filterbookbyyear(year) {
  const array = [
    { title: "Pride and Prejudice", author: "Jane Austen", years: 1813 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", years: 1925 },
    { title: "1984", author: "George Orwell", years: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", years: 1960 },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      years: 1967,
    },
  ];
  let a = 0;
  while (a < array.length) {
    a++;

    console.log(a);

    if (array[a].years >= year) {
      console.log(array[a]);
    }
  }
}

filterbookbyyear(1980);
