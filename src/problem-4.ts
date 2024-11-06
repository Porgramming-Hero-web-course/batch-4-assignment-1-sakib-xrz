{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  type CalculateShapeArea = (shape: Shape) => number;

  const calculateShapeArea: CalculateShapeArea = (shape) => {
    switch (shape.shape) {
      case "circle":
        const circleArea = (Math.PI * shape.radius ** 2).toFixed(2);
        return parseFloat(circleArea);
      case "rectangle":
        const rectangleArea = (shape.width * shape.height).toFixed(2);
        return parseFloat(rectangleArea);
    }
  };

  const circle: Circle = { shape: "circle", radius: 5 };
  const rectangle: Rectangle = {
    shape: "rectangle",
    width: 4,
    height: 6,
  };

  const circleArea = calculateShapeArea(circle);
  const rectangleArea = calculateShapeArea(rectangle);

  console.log(circleArea); // 78.54
  console.log(rectangleArea); // 24
}
