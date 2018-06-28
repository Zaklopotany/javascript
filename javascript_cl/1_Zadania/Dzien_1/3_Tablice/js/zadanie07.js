function getMissingElement(array) {
  var mod = 0;
  var bool = array.every(function(element, index, array) {
    if (index < array.length - 1) {
      if (array[index + 1] - element == 2) {
        mod = element;
      }
      return element < array[index + 1];
    } else if( index > 0) {
      return true;
    } else {
      return false;
    }
  });

  if (bool) {
    return mod;
  }

  return null;
}

console.log(getMissingElement([1, 2, 3, 5, 6, 7]));
console.log(getMissingElement([1, -1, 0]));
console.log(getMissingElement([1]));
