//function that takes an array of strings as input and returns the longest string in the array.

function getLongestString(strings: string[]): string {
    let longestString = "";
    for (let i = 0; i< strArr.length; i++) {
        if (string.length > longestString.length) {
            longestString = string;
        }
    }
    return longestString;
}

const strings = ["ritika","srivastava"];
const longestString = getLongestString(strings);
console.log(longestString); // Output: "srivastava"
