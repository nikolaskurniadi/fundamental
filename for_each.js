//For Each: Loop//

// var nums = ["Gajah", "Kucing", "Kuda"];

// var tryOut = (val) => {
//   console.log(`Loop ${val}`);
// };

// nums.forEach(tryOut);

//For Each: value on index//

// var nums = [1, 2, 3];

// var cb = (val, idx) => {
//   console.log(`Index ke ${idx} isinya adalah ${val}`);
// };

// nums.forEach(cb);

//For Each: Ganjil dan genap menggunakan array

var oddEven = (numbers) => {
  var odds = [];
  var even = [];

  numbers.forEach((number) => {
    if (number % 2 == 1) {
      odds.push(number);
    } else {
      even.push(number);
    }
  });
  return [odds, even];
};

console.log(oddEven([11, 22, 34, 41, 52, 64, 71, 86]));
console.table(oddEven([11, 22, 34, 41, 52, 64, 71, 86]));
