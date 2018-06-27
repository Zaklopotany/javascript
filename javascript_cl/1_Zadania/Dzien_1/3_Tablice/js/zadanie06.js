function factors(liczba) {
  var array = [];
  if (liczba <= 0) {
    return array;
  }

  for (i = 1; i <= liczba; i++) {
    if(liczba % i == 0) {
      array.push(i);
    }
  }
  return array.reverse();

}

console.log(factors(22));
console.log(factors(-111));
console.log(factors(123123));
