const numbers: number[] = [7, 8, 1, 3, 2, 4, 5, 9];

if (numbers.length < 2) {
    throw new Error('Array must have at least two numbers.');
}

let largest = numbers[0];
let secondLargest = numbers[1];

if (secondLargest > largest) {
    [largest, secondLargest] = [secondLargest, largest];
}

for (let i = 2; i < numbers.length; i++) {
    const current = numbers[i];

    if (current > largest) {
        secondLargest = largest;
        largest = current;
    } else if (current > secondLargest) {
        secondLargest = current;
    }
}

console.log(`The second largest number is: ${secondLargest}`);



//the second largest number will be 8