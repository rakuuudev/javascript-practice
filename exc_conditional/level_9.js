let hours = 4;
let whatTime;

if (hours >= 5 && hours < 12) {
    whatTime = "selamat pagi";
} else if (hours >= 12 && hours < 15) {
    whatTime = "selamat siang";
} else if (hours >= 15 && hours < 18) {
    whatTime = "selamat sore";
} else {
    whatTime = "selamat malam";
}

console.log(whatTime);