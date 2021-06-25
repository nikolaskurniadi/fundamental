// const kuroky = {
//     name : "Kuro Salehi",
//     age : 28,
//     position : "Captain",
//     team : "Nigma"
// }

// const ceb = {
//     name : "Sebastian Deb",
//     age : 28,
//     position : "Coach",
//     team : "OG"
// }

// const puppey = {
//     name : "Clement Ivanov",
//     age : 30,
//     position : "Captain",
//     team : "Team Secret"
// }

class Player {
  constructor(name, age, nationality, position, team) {
    this.name = name;
    this.age = age;
    this.natioanality = nationality;
    this.position = position;
    this.team = team;
  }
  intro() {
    console.log(`Heloo, my name is ${this.name}`);
  }
}

const dendi = new Player(
  "Daniel Mananta",
  30,
  "Indonesia",
  "Captain",
  "Barcelona"
);
const minan = new Player("Kuro Salehi", 33, "Staff", "Madrid");

dendi.intro();
minan.intro();
