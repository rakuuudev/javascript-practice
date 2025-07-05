function isEven(n) {
 for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 ) {
        console.log(`${i} is an odd number`);
    } else {
        console.log(`${i} is an even number`); 
        }
    } 
}


isEven(10);