var namaKamu = "Hana Anisa";

var intro = (name) => {
  console.log(`Halo nama saya adalah ${name}`);
};

intro(namaKamu);

// var fullName = (firstName, lastName) => {
//   console.log(`Halo nama lengkap saya adalah ${firstName} ${lastName}`);
// };

// fullName("Nia", "Samsudin");
// fullName("Nissa", "Sabyan");

// var addition = (numberOne, numberTwo) => {
//   var result = numberOne + numberTwo;
//   console.log(result);
// };

// addition(1, 3);

//Array checking//
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday"];

// var arrCheck = (arr) => {
//   var arrLength = arr.length;
//   var arrJoin = arr.join(", ");
//   console.log(
//     `Array ini memiliki ${arrLength} dengan data sebagai berikut: ${arrJoin}`
//   );
// };

// arrCheck(days);

var power = (Num1, Num2 = 2) => {
  var result = Num1;
  for (var i = 1; i < Num2; i++) {
    result *= Num1;
  }
  return [Num1, Num2, result];
};

var powerDua = (Num1, Num2 = 2) => {
  var angkaSatu = Num1 * Num1;
  var angkaDua = Num2 * Num2;
  return [angkaSatu, angkaDua];
};

var resultDua = powerDua(5, 7);
console.log(`${resultDua[0]} dan ${resultDua[1]}`);

//powerDua (5, 7)
//hasilnya (return) [25, 49]

// var result = power(7);
// console.log(`${result[0]} pangkat ${result[1]} adalah ${result[2]} `);
