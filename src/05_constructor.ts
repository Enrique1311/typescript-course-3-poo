// * Constructor

export class MyDate {
  // * Shortcuts para el constructor (se debe especificar si es público o privado)
  // * También se pueden asignar valores por defecto en el constructor
  constructor(
    public year: number = 2000,
    public month: number = 4,
    private day: number = 15
  ) {}

  printFormat(): string {
    const day = this.addZero(this.day);
    const month = this.addZero(this.month);
    return `${day}/${month}/${this.year}`;
  }

  // * Las funciones también pueden ser privadas
  private addZero(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `0${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const date2 = new MyDate(2000, 2, 1);
console.log(date2.printFormat());
