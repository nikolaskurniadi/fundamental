// /*Multiple by Two : For Each*/

// var numbers = [1, 2, 3];
// var arrResult = [];

// numbers.forEach((number) => {
//   arrResult.push(number * 2);
// });

// console.log(arrResult);

// /*Multiple by Two : Map*/

// var numbers = [1, 2, 3];
// var mapResult = numbers.map((number) => {
//   return number * 2;
// });
// console.log(mapResult);

// //Man or woman//

// var persons = [
//   ["Jeanete", "Woman"],
//   ["Kim Shin", "Man"],
//   ["Tony", "Man"],
// ];

// var result = persons.map((person) => {
//   if (person[1] == "Woman") {
//     return `Mrs. ${person[0]}`;
//   } else {
//     return `Mr. ${person[0]}`;
//   }
// });

// console.log(result);

// var numbers = [1, 2, 3, 4, 17];
// var oddEven = (numbers) => {
//   return numbers.map((number) => {
//     if (number % 2 == 1) {
//       return [number, "Ganjil"];
//     } else {
//       return [number, "Genap"];
//     }
//   });
// };
// var oddEvenResult = oddEven(numbers);
// console.log(oddEvenResult);

//Map duplicate : for loop//
var mapForLoop = (arr, cb) => {
  var arrMap = [];
  for (var i = 0; i < arr.length; i++) {
    arrMap.push(cb(arr[i]));
  }

  return arrMap;
};

var numbers = [1, 2, 3];
var multiplication = (number) => {
  return number * 2;
};

var forLoopResult = mapForLoop(numbers, multiplication);
console.log(forLoopResult);

var mapResult = numbers.map(multiplication);
console.log(mapResult);

//Map duplicate : for Each//
var mapForEach = (arr, cb) => {
  var arrMap = [];
  arr.forEach((val) => {
    arrMap.push(cb(val));
  });

  return arrMap;
};

var numbers = [1, 2, 3];
var multiplication = (number) => {
  return number * 2;
};

var forLoopResult = mapForEach(numbers, multiplication);
console.log(forLoopResult);

var few = numbers.map(multiplication);
console.log(few);
