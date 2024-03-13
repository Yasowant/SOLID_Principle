class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}
class Square extends Shape {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}
function calculateTotalArea(shapes) {
  return shapes.reduce(
    (totalArea, shape) => totalArea + shape.calculateArea(),
    0
  );
}
const rectangle = new Shape(5, 4);
const square = new Square(5);
const totalAreaBeforeChange = calculateTotalArea([rectangle, square]);
console.log('Total area before change:', totalAreaBeforeChange);
square.height = 10;
const totalAreaAfterChange = calculateTotalArea([rectangle, square]);
console.log('Total area after change:', totalAreaAfterChange);
