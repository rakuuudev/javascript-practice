const isleapYear = 2004;
let leapYear;

if (isleapYear % 4 === 0 && 100 != 0) {
    leapYear = "Leap Year.";
}  else if ( leapYear % 400 === 0 ) {
    leapYear = "Leap year";
} else {
    leapYear = "NOT A LEAP YEAR";
}

console.log(leapYear);