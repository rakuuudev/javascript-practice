const inputTheHour = 19;
let  whatTimeisit;

if (inputTheHour < 12) {
    whatTimeisit = "Good Morning!";
} else if (inputTheHour > 18) {
    whatTimeisit = "Good Evening!";
} else {
    whatTimeisit = "Good Afternoon!";
}

console.log(whatTimeisit);