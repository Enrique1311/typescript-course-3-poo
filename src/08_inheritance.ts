export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along...');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  guau(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Guau!!!');
    }
  }
}

const rocky = new Animal('Rocky');
console.log(rocky.move());
console.log(rocky.greeting());

const luna = new Dog('Luna', 'Enrique');
luna.move();
console.log(luna.greeting());
luna.guau(4);
console.log(`Luna's owner: ${luna.owner}`);
