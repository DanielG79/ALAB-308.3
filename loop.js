// Part 1: Fizz Buzz

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("Fizz Buzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("BUZZ")
//     } else {
//         console.log(i)
//     }
// }

// Part 2: Prime Time

// const findNextPrime = (n) => {
//     if (num <= 1) return false
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false
//     }
//     return true
// };

// let nextPrime = n;
// while (!isPrime(nextPrime)) {
//     nextPrime++;
    
// }
// console.log(nextPrime);

// findNextPrime(4);



// Part 3: Feeling Loopy

const num = 950; // 5 5/4, 5/3, 5/2 6 6/5 6/4 6/3 

mainLoop: for(let i=num; i<1000; i++) { // i = 5, i=6, i=7
    // 1 is not prime
    if(num === 1) continue; 

    for(let j=num; j>1; j--) { // j = 5, j = 4 6/4 6/3 7/6, 7/5, 7/4, 7/3, 7/2, j=1
        if(i % j === 0) continue mainLoop; // We are looking for the NEXT PRIME NUMBER;
    }

    console.log(i);

    break;
}