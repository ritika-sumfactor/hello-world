//Write a function that takes an array of numbers as input and returns a new array containing only the even numbers in the original array
function getEvenNumbers(numbers: number[]): number[] {
  const evenNumbers: number[] = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}
const numbers = [11,12,13,14,15,16,17,18,19,20];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);// Output:[12,14,16,18,20]
