// Write a function that takes an array of integers as input and returns the maximum subarray sum, where a subarray is defined as a contiguous subsequence of the original array

function kadaneAlgorithm(arr: number[]): number {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}
const arr = [1, -2, 3, 4, -1, 2, -5, 4];
const maxSum =kadaneAlgorithm (arr);
console.log(maxSum);
// Output: 8
