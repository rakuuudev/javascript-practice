const value = 80;
let result;

if (value >= 90) {
    result = "you got A grade";
} else if (value >= 80) {
    result = "you got B grade";
} else if (value >= 70) {
    result = "you got C grade";
} else {
    result = "remedial";
}

console.log(result);