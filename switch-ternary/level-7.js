let grade = "A";
let grades;
let remedial = false;

switch (grade) {
    case "A":
        grades = "sangat bagus"
        break;
    case "B":
        grades = "bagus"
        break;
    case "C":
        grades = "cukup"
        break;
    case "D":
        grades = "kurang"
        break;
    case "E":
        grades = "sangat buruk"
        break;
    default:
        grades = "tidak ikut ulangan"
        break;
}

let result = (remedial === true) ? "silahkan ikut remedial" : "tidak perlu ikut remedial";
console.log(`${grades}. ${result}`);