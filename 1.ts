//Write a function that takes a string as input and returns the longest substring that contains at most two distinct characters
function longestSubstring(inputString: string): string {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let charMap: { [key: string]: number } = {};

    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i];
        charMap[currentChar] = i;

        if (Object.keys(charMap).length > 2) {
            const minIndex = Math.min(...Object.values(charMap));
            delete charMap[inputString[minIndex]];
            start = minIndex + 1;
        }

        end = i;

        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
        }
    }

    return inputString.substring(start, end + 1);
}
const str = 'abcbbbbcccbdddadacb';
const longestSubstr = longestSubstring(str);
console.log(longestSubstr); // Output: 'bcbbbbccc'
