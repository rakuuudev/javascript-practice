let day = 1;
let isWeekend = false;
switch (day) {
    case 1:
        console.log("senin") 
        break;
    case 2:
        console.log("selasa")
        break;
    case 3:
        console.log("rabu")
        break;
    case 4:
        console.log("kamis")
        break;
    case 5:
        console.log("jumat")
        break;
    default:
        console.log("tidak ada hari")
        break;
}

let result = (isWeekend === true) ? "akhir pekan" : "hari kerja";
console.log(result);