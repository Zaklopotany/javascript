var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
  if (this.isFunctional === true) {
    console.log("Robot " + this.name + " greets " + toWho);
  } else {
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + "changes name to " + newname);
  this.name = newname;
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + "was fixed");
};

var robot1 = new Robot("jezyk");
var robot2 = new Robot("gezyk");
var robot3 = new Robot("pezyk");

robot1.changeName("newnamejezyk");
robot2.sayHi("robot3");


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
