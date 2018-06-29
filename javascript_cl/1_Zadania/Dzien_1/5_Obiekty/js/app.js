String.prototype.upperLower = function() {
  var modified = "";
  for (i = 0; i < this.length; i++) {
    if (i % 2 != 0) {
      modified += this.charAt(i).toUpperCase();
    } else {
      modified += this.charAt(i).toLowerCase();

    }
  }
  return modified;

}

console.log("JAVAscRIPT JEST CHORY".upperLower());

var Car = {
  brand: "mersedes",
  kolor: "reden",
  km: 0,
  printInfoCar: function() {
    console.log("Marka " + this.brand + " kolor " + this.kolor + " przjechane km " + this.km)

  },
  drive: function(km) {
    this.km += km;
  }

}
Car.printInfoCar();
Car.drive(123);
Car.printInfoCar();
Car.przeglady = ["11-06-21","21-12-1222"];
Car.wpisPrzeglad = function(wpis) {
  this.przeglady.push(wpis);
}

console.log(Car.przeglady);
Car.wpisPrzeglad("12-12-12");
console.log(Car.przeglady);
Car.showAllPrzeglady = function() {
  console.log(this.przeglady);
}

Car.showAllPrzeglady();
