// Inheritence, protected: Es privado(sólo se puede usar de manera interna y no se puede modificar, pero puede tener herencia)

export class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along...');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('Do something...');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  guau(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log(`Guau!!! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    // Creo un método específico para Dog
    console.log('Moving as a dog...');

    // Llama al método del padre
    super.move();
  }
}

const luna = new Dog('Luna', 'Enrique');

// No se puede modificar
// luna.name = 'Another name...';

luna.guau(2);
luna.move();
