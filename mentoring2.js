var addition = (num1, num2) => {
  return num1 + num2;
};
var multiplication = (num1, num2) => {
  return num1 * num2;
};
var tambahLima = (num1, num2, cb) => {
  return cb(3, 4) + 5;
};
console.log(tambahLima(5, 7, addition));

console.log(addition(5, 10));
