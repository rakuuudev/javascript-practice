const number = 50;
let guesstheNumber;

if (number === 50) {
    guesstheNumber = "Benar!";
} else if (number < 50) {
    guesstheNumber = "Terlalu rendah!";
} else {
    guesstheNumber = "Terlalu tinggi!";
}

console.log(guesstheNumber);