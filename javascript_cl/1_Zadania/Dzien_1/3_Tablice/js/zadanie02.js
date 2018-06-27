function add(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function multiply(array) {
  var mul = 1;
  for (i = 0; i < array.length; i++) {
    mul *= array[i];
  }
  return mul;
}

var array = [1, 2, 3, 4, 5, 6];

console.log("mnozenie " + array + " " + multiply(array));
console.log("dodawanie " + array + " " + add(array));
