// Write a function that takes two arrays of integers as input and returns a new array containing the common elements of both arrays, sorted in ascending order

function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const common: number[] = [];

    // Sort both arrays in ascending order
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            common.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return common;
}
const arr1 = [1,3,4,5,7];
const arr2 = [2, 3, 5, 6];

const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements); // Output: [3, 5]