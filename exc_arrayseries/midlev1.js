function getEvenNumbers(arr) {
   let theEvens = arr.filter(number => number % 2 == 0);
   return theEvens;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));