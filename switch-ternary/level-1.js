let day = 5;
let whichOne;

switch (day) {
    case 1:
       whichOne = "senin" 
        break;
    case 2: 
        whichOne = "selasa"
        break;
    case 3: 
        whichOne = "rabu"
        break;
    case 4: 
        whichOne = "kamis"
        break;
    case 5: 
        whichOne = "jum'at"
        break;
    case 6:
        whichOne = "sabtu"
        break;
    case 7:
        whichOne = "minggu"
        break;
    default:
        whichOne = "not valdi"
        break;
}

console.log(whichOne);