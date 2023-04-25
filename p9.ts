//Write a function that takes a string as input and returns true if the string is a palindrome, and false otherwise

function isPalindrome(str: string): boolean {
    const len = str.length;

    // Loop through half the string, comparing characters from both ends
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
const str1 = '191';
const str2 = '251';

console.log(isPalindrome(str1)); // Output: 191 a is palindrome
console.log(isPalindrome(str2)); // Output: 152 is not a palindrome
