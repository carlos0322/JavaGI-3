function exercise(x) {
  return function () {
    return "Todays exercise:" + " " + x;
  };
}
var swim = exercise("running");
var run = exercise("swimming");
console.log(run());
console.log(swim());
