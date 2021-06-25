// var numbers = [1, 2, 3, 4, 5];

// var filterResult = numbers.filter((number) => {
//   return number % 2 == 1;
// });

// console.log(filterResult);

// // Character length filter (more than 5 charachter)//

// var words = ["Koro Sensei", "Jin Mori", "Eren", "Tanjirou", "Zorro"];
// var ngePush = [];

// var filterWords = words.filter((word) => {
//   return word.length > 5;
// });
// console.log(filterWords);

// var tempat = [
//   ["John", 43, "Jakarta"],
//   ["Baby", 21, "Jakarta"],
//   ["Tony", 34, "Surabaya"],
//   ["Justin", 29, "Banjarmasin"],
// ];
// var push = [];

// var filterName = tempat.filter((word) => {
//   return word[2] == "Jakarta" || word[1] > 30;
// });

// console.table(filterName);

var filterForLoop = (arr, cb) => {
  var arrLoop = [];

  for (var i = 0; i < arr.length; i++) {
    var isTrue = cb(arr[i]);

    if (isTrue) {
      arrLoop.push(arr[i]);
    }
  }
  return arrLoop;
};

var numbers = [1, 2, 3];
var odd = (val) => {
  return val % 2 == 1;
};

console.log(filterForLoop(numbers, odd));

var filterForEach = (arr, cb) => {
  var arrLooping = [];

  arr.forEach((val) => {
    if (cb(val)) {
      arrLooping.push(val);
    }
  });

  return arrLooping;
};

var numbers = [1, 2, 3];
var odd = (val) => {
  return val % 2 == 1;
};

console.log(filterForEach(numbers, odd));
