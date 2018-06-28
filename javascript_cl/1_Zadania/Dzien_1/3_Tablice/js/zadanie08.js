var array = [1992, 1209, 1993, 490, 2011];

function getYoungestAndOldest(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  var array2 = [];
  var current_year = new Date().getFullYear();

  array2.push(array.shift(),array.pop());

  array2[0] = "Rok urodzenia najstarszej osoby " + array2[0] + " wiek " + (current_year - array2[0]);
  array2[1] = "Rok urodzenia najmlodszej osoby " + array2[1] + " wiek " + (current_year - array2[1]);

  return array2;

}

console.log(getYoungestAndOldest(array));
