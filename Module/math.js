// area of a circle
function areaCircle(radius) {
  return Math.PI * radius * radius;
}

// area of a triangle
function areaTriangle(base, height) {
  return 0.5 * base * height;
}

// area of a square
function areaSquare(side) {
  return side * side;
}

// area of a rectangle
function areaRectangle(length, width) {
  return length * width;
}

module.exports = {
  areaCircle,
  areaTriangle,
  areaSquare,
  areaRectangle
};
