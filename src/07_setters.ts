// * Setters (modifican)

export class MyDate {
  constructor(
    public year: number = 2000,
    private _month: number = 4,
    private _day: number = 15
  ) {}

  printFormat(): string {
    const day = this.addZero(this.day);
    const month = this.addZero(this._month);
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
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  // Los setters no retornan nada. Sólo modifican
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('Invalid month');
    }
  }
}

const date2 = new MyDate(1993, 2, 1);
console.log(date2.printFormat());

date2.month = 4;
console.log('run: ', date2.month);

// date2.month = 20;
// console.log('Esto no aparece!', date2.month);
