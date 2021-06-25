const captain = {
  name: "Kuroky",
  pets: ["Cat", "fox", "bird"],
  active: true,
  height: 170,
  play: function (game) {
    console.log(`PLaying ${game}`);
  },
};

console.log(captain.name);
console.log(captain.pets);
captain.play("Insaniquarium");

console.log(captain["name"]);
captain["play"]("Dota");

//Changing Value//
captain.pets = "dog";
captain.height = 169;
captain.play = function (game) {
  console.log(`Let's play some ${game}`);
};
captain.play("Dota");

////////////////
//Add New Key//
/////////////////

captain.nationality = "Germany";
console.log(captain.nationality);

///////////////////
/* Destructure */
//////////////////

// const { name, pets } = captain;
// console.log(name);
// console.log(pets);
// console.log(`My name is ${name}, and I have ${pets.length} pets`);

////////////
/* New */
////////////

const capitan = new Object();

console.log(capitan);

capitan.name = "Sebastian";
capitan.pets = ["Owl", "Dog"];
capitan.play = function (game) {
  console.log(`Playing ${game}`);
};

console.log(capitan);
