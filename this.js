/////////////////
/* THIS KEYWORD */
/////////////////

const person = {
  firstName: "Tobias",
  lastName: "Taavitsainen",
  nickName: "Topson",
  greet: function (b) {
    console.log(`Good ${b}`);
  },
  intro: function (a) {
    this.greet(a);
    console.log(`My first name ${this.firstName}`);
  },
};

person.intro("Morning");
