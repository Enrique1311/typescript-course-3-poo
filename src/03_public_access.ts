// * Valores públicos (si no se pone "public", igual lo son por defecto)
// * Se pueden modificar o utilizar fuera de la función

export class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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

console.log(date2.day);

date2.day = 20;
console.log(date2.day);
