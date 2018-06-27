function distFromAverage(array) {
  var abs = 0;
  for (i = 0; i < array.length; i++) {
    abs += array[i];
  }
  abs /= array.length;
  return array.map(function(element, index, array) {
    return Math.abs(element - abs);
  });
}

console.log(distFromAverage([1, 2, 3, 4, 5]));
console.log(distFromAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]));
