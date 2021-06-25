var basic = () => {
  return "I am the boss";
};

console.log(basic());

var oneToTenRandom = () => {
  var ran = Math.random();
  var ranMul = ran * 10;
  var ceil = Math.floor(ranMul) + 1;

  return ceil;
};

var ranResult = oneToTenRandom();
console.log(ranResult);

//Parameter and Return

var fullName = (first, last) => {
  return `${first} ${last}`;
};

var result = fullName(`robert`, `hogned`);
console.log(`nama saya adalah ${result}`);
