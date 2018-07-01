var boilEgg = function(timeS) {
  var interval = setInterval(function() {
    console.log("jajko się gotuję");

  }, 5000);

  setTimeout(function() {
    console.log('egg boiled');
    clearInterval(interval);
  }, timeS * 1000);

}

boilEgg(10);


//zadanie 4

var jollo = function() {

  return Array.from(arguments).sort(function(a, b) {
    return b - a;
  })[0];

}

console.log(jollo(2, 3, 532,123123, 33, 4, 5, 1, 2, 4, 5, -1, -1));
