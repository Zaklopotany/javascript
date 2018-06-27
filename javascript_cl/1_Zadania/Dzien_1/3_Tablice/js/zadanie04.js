var fruits_array = ["kupon", "bufon", "lifon"];
var i = 0;
console.log(fruits_array[0]);
console.log(fruits_array[fruits_array.length - 1]);



while (i < fruits_array.length) {
  console.log(fruits_array[i]);
  i++;
}

fruits_array.forEach(function(element, index, array) {
  console.log(element);
});
