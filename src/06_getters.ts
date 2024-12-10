// * Getters (los getters siempre deben retornar algo)

export class MyDate {
  constructor(
    public year: number = 2000,
    public month: number = 4,
    // Los valores a los que vamos a acceder mediante un getter usualmente se le coloca el "_"
    private _day: number = 15
  ) {}

  printFormat(): string {
    const day = this.addZero(this.day);
    const month = this.addZero(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addZero(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `0${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  // Saber si un año es biciesto
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const date2 = new MyDate(1993, 2, 1);
console.log(date2.printFormat());

// Se ejecuta el método day como si fuera una propiedad, sin los paréntesis (o sea get day)
console.log(date2.day);

// Se ejecuta el método isLeapYear
console.log('1993', date2.isLeapYear);

const date3 = new MyDate(2000, 2, 1);
console.log('2000', date3.isLeapYear);

const date4 = new MyDate(2001, 2, 1);
console.log('2001', date4.isLeapYear);

const date5 = new MyDate(2004, 2, 1);
console.log('2004', date3.isLeapYear);
