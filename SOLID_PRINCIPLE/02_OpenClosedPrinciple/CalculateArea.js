class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error('Cannot instantiate abstract class Shape');
    }
  }
  calculateArea() {
    throw new Error('Method not implemented');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

function calculateTotalArea(shapes) {
  return shapes.reduce(
    (totalArea, shape) => totalArea + shape.calculateArea(),
    0
  );
}

const rectangle = new Rectangle(5, 4);
const circle = new Circle(2);
const totalArea = calculateTotalArea([rectangle, circle]);
console.log('Total area:', totalArea);
