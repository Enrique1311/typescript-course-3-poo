// * Valores privados (se pueden modificar o utilizar fuera de la función)

export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

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

// No se puede acceder desde fuera de la función
// console.log(date2.day);
