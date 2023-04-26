// Write a function that takes a string as input and returns true if the string can be rearranged to form a palindrome, and false otherwise.
function isPalindrome(s: string): boolean {
    const charCount: {[key: string]: number} = {};
    let oddCount = 0;
    for (const c of s) {
        if (charCount[c]) {
            charCount[c]++;
        } else {
            charCount[c] = 1;
        }
    }
    for (const count of Object.values(charCount)) {
        if (count % 2 === 1) {
            oddCount++;
            if (oddCount > 1) {
                return false;
            }
        }
    }

    return true;
}
console.log(isPalindrome("kanak"));  // true
console.log(isPalindrome("12331"));  // false


