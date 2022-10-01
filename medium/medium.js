function cutPizzaSlices(x) {
  return function (y) {
    return "Each person gets" + " " + x / y + " " + "slices of pizza";
  };
}

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));
