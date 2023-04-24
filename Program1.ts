//Wap to calculate the sum of all numbers in an array
function sumArray(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
 const myArray = [10, 15, 20, 25, 30];
 const mySum = sumArray(myArray);
 console.log(mySum);



 // Output: 100
