export class MyDate {
  year: number;
  month: number;
  day: number;

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

date2.add(4, 'days');
console.log(date2.printFormat());

date2.add(2, 'months');
console.log(date2.printFormat());

date2.add(10, 'years');
console.log(date2.printFormat());

console.log(date2.day);
console.log(date2.month);
console.log(date2.year);
