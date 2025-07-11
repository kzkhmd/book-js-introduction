// current date
let date = new Date();
console.log(date);

// date setup
let date1 = new Date(2022, 11, 4, 20, 7, 15, 365);
console.log(date1);

// unix timestamp
let date2 = new Date();
let date3 = new Date(date2.getTime());
console.log(date2);
console.log(date3);

// date calc
let date4 = new Date(2022, 11, 15, 20, 40);
console.log(date4);

date4.setMonth(date4.getMonth() + 3);
console.log(date4);

date4.setDate(date4.getDate() - 20);
console.log(date4);

// date diff
let date5 = new Date(2022, 10, 15);
let date6 = new Date(2022, 11, 20);
let diff = (date5.getTime() - date6.getTime()) / (1000 * 60 * 60 * 24);
console.log(`${diff}日の差があります`);

// date format
let date7 = new Date(2022, 11, 4, 20, 7, 15, 368);
let fmt = new Intl.DateTimeFormat(
    'ja-JP',
    {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        weekday: 'long',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        dayPeriod: 'short'
    }
);
console.log(fmt.format(date7));
