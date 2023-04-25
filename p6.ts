//Write a function that takes a number as input and returns the factorial of that number

function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const n = 3;
const fact = factorial(n);
console.log(fact);

// Output: 6
