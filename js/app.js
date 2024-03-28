// class Marker {
//   color;
//   inkNumber;

//   constructor(color, inkNumber) {
//     this.color = color;
//     this.inkNumber = inkNumber;
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////////

class ExtendedDate extends Date {
  constructor() {
    super();
  }
  getMonth() {
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[super.getMonth()];
  }
  getDate() {
    let date = super.getDate();
    let month = this.getMonth();
    return ` Месяц - ${month} День - ${date}`;
  }

  leapYear() {
    let year = super.getFullYear();
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      return true;
    } else {
      return false;
    }
  }
  getNextDay() {
    let today = this.getDay();
    today += 1;
    return today;
  }
}

let extendDate = new ExtendedDate();
console.log(extendDate.getDate());

let date = new ExtendedDate(2024, 1, 1);
console.log(date.leapYear());

let newNextDay = new ExtendedDate(2024, 1, 1);
console.log(newNextDay.getNextDay());
