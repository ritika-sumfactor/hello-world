//Write a function that takes an array of integers as input and returns the length of the longest increasing subsequence

function longestSubsequence(arr: number[]): number {
    const n = arr.length;
    const m: number[] = new Array(n).fill(1);
    let maxLength = 1;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                m[i] = Math.max(m[i], m[j] + 1);
                maxLength = Math.max(maxLength, m[i]);
            }
        }
    }

    return maxLength;
}

//let suppose i have an array = [3, 10, 2, 1, 20];
//and then i will call the longestSubsequence function and then will pass arr as the input

const arr = [3, 10, 2, 1, 20];
const length = longestSubsequence(arr);
console.log(length);
//output=3 i.e.[3, 10,20]