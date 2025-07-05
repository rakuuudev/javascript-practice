const shoppingDiscount = 150.000;

let getOrnot;

if (shoppingDiscount >= 100.000) {
    getOrnot = "you get a 10% discount!";
} else {
    getOrnot = "you do not get a discount";
}

console.log(getOrnot);