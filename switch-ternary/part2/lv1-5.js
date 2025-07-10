//soal 1
let temperature = 23;

let temp = temperature >= 30 ? "hot" : "cold";
console.log(temp);

//soal 2

let grade = 80;

let isPass = grade >= 75 ? "lulus" : "tidak lulus";
console.log(isPass);

//soal 3 

let day = 1;

switch (day) {
    case 1:
    console.log("Senin")
        break;
    case 2:
        console.log("Selasa")
        break;
    case 3:
        console.log("Rabu")
        break;
    default:
        console.log("hari lain")
        break;
}

//soal 4
let food = "sate";

let foodCountry;

switch (food) {
    case "sate":
        console.log("Makanan khas Indonesia")
        break;
    case "ramen": 
        console.log("Makanan khas Jepang")
        break;
    case "pizza":
        console.log("Makanan khas Italia")
        break;
    default:
        console.log("tidak diketahui")
        break;
}

//soall 5
const hari = 1;

switch (hari) {
    case 1:
        console.log("Senin")
        break;
    case 2:
        console.log("selasa")
        break;
    case 3:
        console.log("rabu")
        break;
    default:
        break;
}

const age = 17;

let isOld = age >= 18 ? "Dewasa" : "Anak-anak";
console.log(isOld);