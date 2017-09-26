// Part 1
//
// Write a class called Point without using ECMAScript 6, which represents a point in two-dimensional
// space. A point has x and y properties, given as arguments to its constructor.
//
// It also has a single method plus, which takes another point and returns the sum of the two points,
// that is, a new point whose x is the sum of the x properties of the two original points, and whose
// y is the sum of their y properties.

function Point(x, y){
  this.x = Math.floor(Math.random(x)*10);
  this.y = Math.floor(Math.random(y)*10);
}


var core = new Point ();

Point.prototype.plus = function (x, y) {
  this.x = this.x + x;
  this.y = this.y + y;
  console.log(this.x, this.y);
};

console.log(core);
core.plus(3,1);
