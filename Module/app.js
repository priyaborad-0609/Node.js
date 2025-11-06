const areaCircle = require('./circle');
const areaTriangle = require('./triangle');
const areaSquare = require('./square');
const areaRectangle = require('./rectangle');

console.log("Areas using CommonJS modules:\n");

console.log("Circle area: " + areaCircle(5).toFixed(2));
console.log("Triangle area: " + areaTriangle(6, 4).toFixed(2));
console.log("Square area: " + areaSquare(8).toFixed(2));
console.log("Rectangle area: " + areaRectangle(10, 5).toFixed(2));
