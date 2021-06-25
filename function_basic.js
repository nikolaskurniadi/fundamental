//Function Declaration//

function firstStep() {
  var name = "Ethan";
  console.log(
    `Segala sesuatu yang besar, selalu dimulai dari satu langkah kecil`
  );
}

firstStep();

//Function Expression//

var keepGoing = function () {
  console.log(`Apapun yang terjadi, teruslah melangkah`);
};

keepGoing();

//Function expression arrow//

var earth = () => {
  console.log(`Selamatkan Bumi`);
};

earth();

//without parameter & return//

var fullName = () => {
  var firstName = "Isaac";
  var lastName = "Newton";
  console.log(`Halo nama saya ${firstName} ${lastName}`);
};

fullName();

var result = fullName();
console.log(result);
