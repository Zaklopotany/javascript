function create2Darray(cols, rows) {
  var array = []
  var index = 1;
  for (i = 0; i < cols; i++) {
    array[i] = [];
    for (j = 0; j < rows; j++) {
      array[i].push(index++);
    }
  }
  return array;
}

console.log(create2Darray(13, 13));
