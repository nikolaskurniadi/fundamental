var number = [1, 2, 3, 4];

var arrCalc = (arr, operation, operand) => {
  var result = [];
  switch (operation) {
    case "addition":
      for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] + operand);
      }

      console.log(`hasil akhir dari array adalah ${result}`);

      break;
    case "multiplication":
      for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] * operand);
      }
      console.log(`hasil akhir dari array adalah ${result}`);

      break;

    default:
      for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] / operand);
      }
      console.log(`hasil akhir dari array adalah ${result}`);
      break;
  }
};

arrCalc(number, "multiplication", 4);
