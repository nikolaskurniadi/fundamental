// var words = ["red", "apple", "rain", "cat", "green"];

// words.sort();

// console.log(words);

// Cara sort Numbers//

// var numbers = [23, 10, 45, 82, 3, 9];

// var asc = (a, b) => {
//   return a - b;
// };

// var dsc = (a, b) => {
//   return b - a;
// };

// numbers.sort(asc);

// console.log(numbers);

var persons = [
  ["John", 44],
  ["John", 43],
  ["Baby", 21],
  ["Justin", 29],
];

var personSort = (arr) => {
  arr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      return a[1] - b[1];
    }
  });
  return arr;
};

console.log(personSort(persons));
