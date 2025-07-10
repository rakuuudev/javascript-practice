let examgrade = 3;
let result;

switch (examgrade) {
    case 1:
        result = "Buruk"
        break;
    case 2: 
         result = "Kurang"
         break;
    case 3:
        result = "Cukup"
        break;
    case 4:
        result = "Baik"
        break;
    case 5:
        result = "Sangat Baik"
        break;
    default:
        result = "kamu tidak mengikuti ujian"
        break;
}

console.log(result);