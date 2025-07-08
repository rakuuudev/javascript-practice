let day = 3;
let text;

switch (day) {
    case 1:
        text = "senin"
        break;
    case 2:
        text = "selasa"
        break;
    case 3:
        text = "rabu"
        break;
    case 4: 
        text = "kamis" 
        break;   
    case 5: 
        text = "jum'at"
        break;
    case 6:
        text = "sabtu"
        break;
    case 7:
        text = "minggu"
        break;
    default:
        text = "tidak ada hari selain senin-minggu"
        break;
}

console.log(text);