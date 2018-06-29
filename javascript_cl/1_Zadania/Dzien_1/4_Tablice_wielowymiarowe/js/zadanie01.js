function chceckArray(array) {
  var array_parity = [];
  for (i = 0; i < array.length; i++) {
    var check = true;
    for (j = 0; j < array[i].length; j++) {
      if (array[i][j] % 2 != 0) {
        check = false;
      }
    }
    array_parity.push(check);
  }
  return array_parity;
}

var array = [
  [11, 12],
  [1, 3],
  [2, 4],
  [-6, -8],
  [-10, 4]
];
var array2 = [
  [1, 2, 3, 4, 5, 6],
  [12, 14, 15, 10],
  [2, 4, 6, 8],
  [-2, -2, -2],
  [2, -2, -2, 0],
  [1, 1, 1, 1, 1, 1]
];
var arr = [];
arr[0] = [3, 4, 56, 773, 1];
arr[1] = [7, 12, 0, 98, 34, 381];
arr[2] = [12, 66, 96, 54, 10];

console.log(chceckArray(array));
console.log(chceckArray(array2));
console.log(chceckArray(arr));
