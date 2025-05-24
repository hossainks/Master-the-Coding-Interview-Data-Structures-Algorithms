class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hey I am ${this.name}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type); // Calls Player's constructor
  }
  play() {
    console.log(`I'm a ${this.type}!`);
  }
}

const wizard = new Wizard('wiz', 'fighter');
wizard.play();
wizard.introduce();
