/////////////////////
/* INHERITANCE */
/////////////////////

class Player {
  constructor(name, nickname, nationality) {
    this.name = name;
    this.nickname = nickname;
    this.nationality = nationality;
  }
  intro() {
    console.log(`My Name is ${this.name} but you can call me ${this.nickname}`);
  }
}

class casualPlayer extends Player {
  constructor(name, nickname, nationality, job) {
    super(name, nickname, nationality);
    this.job = job;
  }

  myJob() {
    console.log(`I'm not a pro player so I have a job, that is ${this.job}`);
  }
}

class proPlayer extends Player {
  constructor(name, nickname, nationality, team) {
    super(name, nickname, nationality);
    this.team = team;
  }

  myTeam() {
    console.log(`I'm a pro player so I have a team, that is ${this.team}`);
  }
}

//Panggil semuanya//
const siti = new Player("Siti Nurbaya", "Siti", "Indonesia");
siti.intro();

const smith = new casualPlayer(
  "Smith Enderson",
  "Smith",
  "United Kingdom",
  "Tukang Bangunan"
);
smith.intro();
smith.myJob();

const angel = new proPlayer("Angel Lelga", "Angel", "Zimbabwe", "Evos");
angel.intro();
angel.myTeam();
