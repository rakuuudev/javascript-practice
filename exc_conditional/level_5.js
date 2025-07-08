let str = "theprimeagen ";
let isVocal;

if (str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u')) {
    isVocal = `${str} is have vowels`;
} else {
    isVocal = `${str} isn't have vowels`;
}

console.log(isVocal);