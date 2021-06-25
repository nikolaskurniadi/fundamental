var addition = (num1, num2) => {
  return num1 + num2;
};
var multiplication = (num1, num2) => {
  return num1 * num2;
};
var calculator = (num1, num2, cb) => {
  return cb(num1, num2);
};
var result = calculator(3, 9, multiplication);
console.log(result);

// var number = [23, 34, 35];

// var arrCalculator = (arr, operand, cb) => {
//   var arrResult = [];
//   var operationResult;

//   for (var i = 0; i < arr.length; i++) {
//     operationResult = cb(arr[i], operand);
//     arrResult.push(operationResult);
//   }
//   return arrResult;
// };

// var result = arrCalculator(number, 2, multiplication);
// console.log(result);
