function isEven (number){
    return (number & 1) === 0;
}

function IsOdd (number){
    return (number & 1) === 1;
}


console.log(isEven(2));
console.log(IsOdd(3));