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
Car.przeglady = ["11-06-21", "21-12-1222"];
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


//zadanie 05

var Rectangle = function(szer, dlu) {
  this.szer = szer;
  this.dlu = dlu;
}

Rectangle.prototype.getArea = function() {
  return this.szer * this.dlu;
}
Rectangle.prototype.getPerimeter = function() {
  return 2 * this.szer + 2 * this.dlu;
}
var rect1 = new Rectangle(2, 3);
var rect2 = new Rectangle(11, 12);

console.log(rect1.getArea());
console.log(rect2.getPerimeter());


//zadanie 06
var Calculator = function() {
  this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
  this.history.push("added " + num1 + " to " + num2 + " got " + (num1 + num2));
  return num1 + num2;
}

Calculator.prototype.printOperation = function() {
  console.log(this.history);
}

Calculator.prototype.clearOperation = function() {
  this.history = [];
}

var calc1 = new Calculator();

console.log(calc1.add(1, 2));
calc1.add(111, 111);
calc1.printOperation();
calc1.clearOperation();
calc1.printOperation();
