let month = 9;
let season;

switch (month) {
    case 12:
    case 1: 
    case 2:
        season = "winter"
        break;
    case 3: 
    case 4:
    case 5:
        season = "spring"
        break;
    case 6:
    case 7:
    case 8:
        season = "summer"
        break;
    case 9:
    case 10:
    case 11:
        season = "fall"
        break;
    default:
        season = "there is no more than 12 months"
        break;
}

console.log(season);